import React from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

import data from '../../assets/venues/venues.json'

import { useStaticQuery, graphql } from 'gatsby'
import Planet from './planet'
import Universe from './universe'

const Venues: React.FC<{}> = () => {
  let universe: Universe
  let planets: Planet[] = []
  const frameRate = 30

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
    let startX = 0
    const planetsSize = venues.reduce((sum, ven) => {
      sum = sum + ven.size + 20
      return sum;
    }, 0)
    console.log(planetsSize, universeWidth)
    const sizeProportion = planetsSize < universeWidth ? 1 : planetsSize / universeWidth;
    console.log(sizeProportion)  
    planets = venues.reduce((acc, v) => {
      const queryImg = files[v.picture]
      if (queryImg){
        const fluidImg = queryImg.childImageSharp.fluid.src
        const img = p5.loadImage(fluidImg)
        const size = Math.floor(v.size / sizeProportion)
        const startY = p5.random(0, universeHeight - size)
        console.log(startX, size)
        const planet = new Planet(v.id, v.name, startX, startY, size, img)
        startX = startX + size + 10
        acc.push(planet)
      }
      return acc
    }, [])
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(universe.width, universe.height).parent(canvasParentRef)
    p5.frameRate(frameRate)
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
    planets.forEach(p => {
      const {x, y} = p.coordinates
      p5.image(p.img, x, y, p.size, p.size)
    })
  }

  return <Sketch preload={preload} setup={setup} draw={draw} />
}

export default Venues
