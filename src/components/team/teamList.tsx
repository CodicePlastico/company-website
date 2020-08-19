import React, { useState } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

import { FullMember } from './model'
import TeamCanvas from './teamCanvas'

export interface TeamMembers {
  team: FullMember[],
  categories: string[]
}

const TeamList = (props: TeamMembers) => {
  const [members, setMembers] = useState([])
  const [canvas, setCanvas] = useState<TeamCanvas>()
  const [size, setSize] = useState<number>(100)
  const { team, categories } = props

  const frameRate = 30
  
  const preload = (p5: p5Types) => {
    const width = p5.min(1200, window.innerWidth - 40)
    const height = p5.min(1000, window.innerHeight - 200)
    const memberSize = Math.floor(Math.sqrt(width * height / (team.length * 2))) - 50;
    setSize(memberSize)
    setCanvas(new TeamCanvas(width, height))
    const coordinates = []
    let protection = 0;
    while(coordinates.length < team.length) {
      let overlapping = false;
      const coords = {
        x: p5.random(0, width - memberSize),
        y: p5.random(0, height - memberSize)
      }

      coordinates.forEach(c => {
        const distance = p5.dist(coords.x, coords.y, c.x, c.y)
        if(distance < (memberSize * 2)) {
          overlapping = true;
        }
      })

      if (!overlapping) {
        coordinates.push(coords);
      }
      protection++
      if (protection > 10000) {
        break;
      }

    }



    const members = coordinates.map((c, i) => {
      const m = team[i]
      const p5Img = p5.loadImage(m.img)
      const { x, y } = c
      return Object.assign({}, m, {p5Img, x, y})
    })
    setMembers(members)
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const canvasEl = p5.createCanvas(canvas.width, canvas.height).parent(canvasParentRef) as unknown as any
    p5.frameRate(frameRate)
    p5.noFill()
    categories.forEach(c => {
      const drawInfo = getLine(c)
      p5.strokeWeight(drawInfo.strokeWeight)
      const {r,g, b} = drawInfo.color
      p5.stroke(r, g, b)
      const centers = members.filter(m => {
        return m.tags.includes(c)
      }).map(mb => getCenter(mb.x, mb.y, size))
      centers.forEach((c, i) => {
        const next = centers[i + 1]
        if (next && canvasEl.drawingContext) {
          if (drawInfo.style === 'dash'){
            canvasEl.drawingContext.setLineDash([5, 15]);
          } else {
            canvasEl.drawingContext.setLineDash([]);
          }
          p5.line(c.x, c.y, next.x, next.y)
        }
      })
    })
    team.forEach(t => {
      const m = members.find(m => m.id === t.id)
      if(m){
        p5.image(m.p5Img, m.x, m.y, size, size)
      }
    })
  }

  const getCenter = (px, py, size) => {
    const halfSize = Math.floor(size / 2)
    return {
      x: px + halfSize,
      y: py + halfSize,
    }
  }

  const getLine = (category: string) => {
    switch (category.toLowerCase()){
      case 'frontend':
        return {
          color: {
            r: 217, 
            g: 50, 
            b: 50
          },
          strokeWeight: 2,
          style: 'line'
        }
        case 'design':
          return {
            color: {
              r: 0, 
              g: 0, 
              b: 0
            },
            strokeWeight: 2,
            style: 'dash'
          }
      default:
        return {
          color: {
            r: 0, 
            g: 0, 
            b: 0
          },
          strokeWeight: 2,
          style: 'line'
        }
    }
  }

  const draw = (p5: p5Types) => {
    
  }

  return (
    <div className="cp-team__list">
      <Sketch preload={preload} setup={setup} />
    </div>
  )
}

export default TeamList





/*import { useStaticQuery, graphql } from 'gatsby'
import Planet from './planet'
import Universe from './universe'

const Venues: React.FC<{}> = () => {
  let universe: Universe
  let planets: Planet[] = []
  const mobile = window.innerWidth < 769
  const frameRate = 30
  const fontSize = mobile ? 12 : 16
  const fontBgWidth = mobile ? 60 : 100
  const fontBgHeight = mobile ? 22 : 26
  let font

  const files = useStaticQuery(graphql`
    query MyQuery {
      headquarter: file(relativePath: { eq: "venues/cpship.png" }) {
        childImageSharp {
          fluid {
            src
            presentationHeight
            presentationWidth
          }
        }
      }
      planet1: file(relativePath: { eq: "venues/planet1.png" }) {
        childImageSharp {
          fluid {
            src
            presentationHeight
            presentationWidth
          }
        }
      }
      planet2: file(relativePath: { eq: "venues/planet2.png" }) {
        childImageSharp {
          fluid {
            src
            presentationHeight
            presentationWidth
          }
        }
      },
      font: file(relativePath: { eq: "venues/barlow_condensed.ttf" }) {
        publicURL
      }
    }`
  )

  const calculateBezierCoords = (first: Planet, second: Planet) => {
    const firstCenter = first.getCenter()
    const secondCenter = second.getCenter()
    return {
      x1: firstCenter.x,
      y1: firstCenter.y,
      x2: firstCenter.x + first.size, 
      y2: firstCenter.y + first.size, 
      x3: secondCenter.x - second.size, 
      y3: secondCenter.y - second.size,
      x4: secondCenter.x, 
      y4: secondCenter.y
    }
  }

  const preload = (p5: p5Types) => {
    const universeWidth = p5.min(1600, window.innerWidth - 40)
    const universeHeight = p5.min(1000, window.innerHeight - 200)
    universe = new Universe(p5, universeWidth, universeHeight)
    const { venues } = data 
    font = p5.loadFont(fontFile)
    let startX = 0
    const planetsSize = venues.reduce((sum, ven) => {
      return sum + ven.size + 30
    }, 0)
    const sizeProportion = planetsSize < universeWidth ? 1 : planetsSize / universeWidth;
    const offset = planetsSize > universeWidth ? 10 : Math.floor((universeWidth - planetsSize) / venues.length);
    planets = venues.reduce((acc, v) => {
      const queryImg = files[v.picture]
      if (queryImg){
        const fluidImg = queryImg.childImageSharp.fluid.src
        const img = p5.loadImage(fluidImg)
        const size = Math.floor(v.size / sizeProportion)
        const startY = p5.random(0, universeHeight - size)
        const planet = new Planet(v.id, v.name, startX, startY, size, img)
        startX = startX + size + offset
        return [...acc, planet]
      }
      return acc
    }, [])
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(universe.width, universe.height).parent(canvasParentRef)
    p5.frameRate(frameRate)
    p5.textFont(font);
  }

  const draw = (p5: p5Types) => {
    p5.background(255)
    p5.noFill()
    p5.stroke(217, 50, 50)
    p5.strokeWeight(3)
    planets.forEach((p, i) => {
      p.fixMovement(universe)
      for (let j = i + 1; j < planets.length; j++){
        const firstP = planets[i];
        const secondP = planets[j];
        if(universe.detectCollision(firstP, secondP)) {
          firstP.invertDirection()
          secondP.invertDirection()
        }
        const bC = calculateBezierCoords(firstP, secondP)
        p5.bezier(bC.x1, bC.y1, bC.x2, bC.y2, bC.x3, bC.y3, bC.x4, bC.y4);
      }
    })
    p5.textSize(fontSize);
    p5.strokeWeight(1)  
    planets.forEach(p => {
      const {x, y} = p.coordinates
      p5.image(p.img, x, y, p.size, p.size)
    })
    planets.forEach(p => {
      const center = p.getCenter()
      let textPosition = {x: center.x, y: center.y}
      if (universe.leftSide(p)){
        textPosition.x = center.x + (p.size / 2) - (mobile ? 0 : 40)
      } else {
        textPosition.x = center.x - (p.size / 2) - (mobile ? fontBgWidth : 60)
      }
      const textBox = font.textBounds(p.planetName, textPosition.x, textPosition.y, fontSize);
      p5.stroke(0)
      p5.fill(0)
      if (p.planetId === 'headquarter') {
        p5.stroke(217, 50, 50)
        p5.fill(217, 50, 50)
      }
      p5.rect(textBox.x, textBox.y, fontBgWidth, fontBgHeight);
      p5.stroke(255)
      p5.fill(255)
      p5.text(p.planetName, textPosition.x + ((fontBgWidth - textBox.w) / 2), textPosition.y + ((fontBgHeight - textBox.h) / 2));
    })
  }

  return <Sketch preload={preload} setup={setup} draw={draw} />
}

export default Venues*/
