import React, { useState } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'
import classNames from 'classnames'

import { FullMember } from './model'
import TeamCanvas from './teamCanvas'
import MemberCanvas from './memberCanvas'

export interface TeamMembers {
  team: FullMember[],
  categories: string[]
  currentCategory: string | null
}

const TeamRelations = (props: TeamMembers) => {
  const [members, setMembers] = useState([])
  const [canvas, setCanvas] = useState<TeamCanvas>()
  const [canvasEl, setCanvasEl] = useState()
  const [size, setSize] = useState<number>(100)
  const [drag, setDrag] = useState<boolean>(false) 
  const [activeMember, setActiveMember] = useState<MemberCanvas>()
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
        x: p5.random(2, width - memberSize - 50),
        y: p5.random(2, height - memberSize - 50)
      }

      coordinates.forEach(c => {
        const distance = p5.dist(coords.x, coords.y, c.x, c.y)
        if(distance < (memberSize * 2)) {
          overlapping = true;
        }
      })

      if (!overlapping) {
        console.log(width, height, memberSize)
        console.log(coords)
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
      return new MemberCanvas(
        m.id, 
        m.name, 
        x, 
        y, 
        size, 
        p5Img, 
        m.tags,
        m.nick, 
        m.description,
        m.role,
        m.social)
    })
    setMembers(members)
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const canvasEl = p5.createCanvas(canvas.width, canvas.height).parent(canvasParentRef) as unknown as any
    setCanvasEl(canvasEl)
    p5.frameRate(frameRate)
  }

  const drawRelations = (p5, canvasEl) => {
    const { currentCategory } = props
    p5.background(255)
    p5.noFill()
    if (currentCategory != 'Tutti') {
      drawCategoryRelation(currentCategory, p5, canvasEl)
    } else {
      categories.forEach(c => {
        drawCategoryRelation(c, p5, canvasEl)
      })
    }
  }

  const drawCategoryRelation = (category, p5, canvasEl) => {
    const drawInfo = getLine(category)
      p5.strokeWeight(drawInfo.strokeWeight)
      const {r,g, b} = drawInfo.color
      p5.stroke(r, g, b)
      const centers = members.filter(m => {
        return m.tags.includes(category)
      }).map(mb => mb.getCenter())
      centers.forEach((c, i) => {
        const next = centers[i + 1]
        if (next && canvasEl.drawingContext) {
          if (drawInfo.style === 'dash'){
            canvasEl.drawingContext.setLineDash([5, 10]);
          } else {
            canvasEl.drawingContext.setLineDash([]);
          }
          p5.line(c.x, c.y, next.x, next.y)
        }
      })
  }

  const drawTeam = (p5, canvasEl) => {
    canvasEl.drawingContext.setLineDash([]);
    p5.stroke(0, 0, 0)
    team.forEach(t => {
      const m = members.find(m => m.memberId === t.id)
      if(m){
        const center = m.getCenter()
        p5.ellipse(center.x, center.y, m.size + 2)
        p5.image(m.img, m.coordinates.x, m.coordinates.y, m.size, m.size)
      }
    })
  } 

  const drawActiveMember = () => {

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
    drawRelations(p5, canvasEl)
    drawTeam(p5, canvasEl)
    drawActiveMember()
  }


  const mouseDragged = (p5: p5Types) => {
    setDrag(true)
    const { mouseX, mouseY } = p5
    const halfSize = Math.floor(size)
    const x = mouseX > halfSize ? (mouseX < (canvas.width - halfSize) ? mouseX : canvas.width - halfSize) : halfSize
    const y = mouseY > halfSize ? (mouseY < (canvas.height - halfSize) ? mouseY : canvas.height - halfSize) : halfSize
    if (mouseX === x || mouseY === y) {
      const member = getActiveElement(p5, x, y)
      if (member) {
        member.setNewCenter(x, y)
      }
    }
    return false
  }

  const mouseReleased = () => {
    setTimeout(() => {
      setDrag(false)
    })
  }

  const mouseClicked = (p5: p5Types) => {
    const { mouseX, mouseY } = p5
    const member = getActiveElement(p5, mouseX, mouseY)
    if (member && !drag) {
      if (!activeMember || activeMember.memberId !== member.memberId) {
        setActiveMember(member)
      } else {
        setActiveMember(null)
      }
    }
  }

  const getActiveElement = (p5: p5Types, x, y) => {
    let minDist = p5.max(canvas.width, canvas.height) 
    let member = null
    members.forEach(m => {
      const center = m.getCenter()
      const dist = p5.dist(center.x, center.y, x, y)
      const halfSize = Math.floor(m.size / 2)
      if (dist < halfSize && dist < minDist) {
        minDist = dist
        member = m
      }
    })
    return member
  }

  const rightActiveMember = activeMember && (activeMember.coordinates.x > (Math.floor(canvas.width / 2)))

  const descriptionClass = classNames('cp-member__description', {'cp-member__description--visible': activeMember}, {'cp-member__description--right': rightActiveMember})

  const getMemberStyle = (right: boolean) => {
    if (activeMember) {
      const top = activeMember.coordinates.y
      console.log(activeMember.coordinates, canvas.width)
      if (right) {
        return {
          top,
          right: canvas.width - activeMember.coordinates.x
        }
      } else {
        return {
          top,
          left: activeMember.coordinates.x + activeMember.size
        }
      }
    } else {
      return {}
    }
  }

  const memberStyle = getMemberStyle(rightActiveMember)

  const toggleDescription = () => {
    setActiveMember(null)
  } 

  const handleClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div className="cp-team__list">
      <Sketch 
        preload={preload} 
        draw={draw} 
        setup={setup} 
        mouseDragged={mouseDragged} 
        mouseReleased={mouseReleased} 
        mouseClicked={mouseClicked} />
      {activeMember && <div className={descriptionClass} style={memberStyle} onClick={handleClick}>
        <button className="cp-member__description-close" onClick={toggleDescription}>x</button>
        <div className="cp-member__description-info">
          <h5 className="cp-member__description-title">{activeMember.memberName}</h5>
          <p><strong>{activeMember.nick && <>@{activeMember.nick}</>} - {activeMember.role}</strong></p>
        </div>
        <p className="cp-member__description-text">
          {activeMember.description}
        </p>
        {activeMember.social.length > 0 && <ul className="cp-member__social">
          {activeMember.social.map(s => (  
            <li key={`${activeMember.memberId}-social-${s.label}`}>
              <a className="cp-member__social-link" href={s.link} target="_blank" rel="noopener noreferrer">{s.label}</a>  
            </li>
          ))}
        </ul>}
      </div>}
    </div>
  )
}

export default TeamRelations