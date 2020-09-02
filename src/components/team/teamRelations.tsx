import React, { useState } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

import { FullMember } from './model'
import TeamCanvas from './teamCanvas'
import MemberCanvas from './memberCanvas'
import MemberDescription from './memberDescription'

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
  const [draggedMember, setDraggedMember] = useState<MemberCanvas>()
  const { team, categories } = props

  const frameRate = 30

  const getMainSize = (members: number, ratio: number): {mainSize: number, lowSize: number} => {
    let mainSize = ratio;
    let lowSize = 1;
    while(mainSize * lowSize < members) {
      lowSize++;
      mainSize = ratio * lowSize;
    }
    return {
      mainSize,
      lowSize
    }
  }

  const retrieveCenters = (width: number, height: number, members: number, p5: p5Types): {squareSize: number, centers: Coordinates[]} => {
    let columns = 0
    let rows = 0
    let ratio = 0
    if (width > height) {
      ratio = Math.floor(width / height)
      const sizes = getMainSize(members, ratio)
      rows = sizes.mainSize
      columns = sizes.lowSize
    } else {
      ratio = Math.floor(height / width)
      const sizes = getMainSize(members, ratio)
      rows = sizes.lowSize
      columns = sizes.mainSize
    }
    const columnSize = Math.floor(width / columns)
    const rowSize = Math.floor(height / rows)
    const squareSize = p5.min(columnSize, rowSize)
    const centers = []
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const xCoord = x * columnSize + Math.floor(columnSize / 2) + Math.floor(p5.random(-20, 21))
        const yCoord = y * rowSize + Math.floor(rowSize / 2) + Math.floor(p5.random(-20, 21))
        centers.push({ x: xCoord, y: yCoord })
      }
    }
    return {squareSize, centers}
  } 

  const shuffleArray = (sortableArray) => {
    const array = sortableArray.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
  
  const preload = (p5: p5Types) => {
    const width = p5.min(1200, window.innerWidth - 40)
    const height = p5.min(1000, window.innerHeight - 200)
    const centers = retrieveCenters(width, height, team.length, p5)
    const memberSize = Math.floor(centers.squareSize / 1.5)
    const halfSize = Math.floor(memberSize / 2)
    setSize(memberSize)
    setCanvas(new TeamCanvas(width, height))
    const coordinates = shuffleArray(centers.centers).slice(0, team.length)
    const members = coordinates.map((c, i) => {
      const m = team[i]
      const p5Img = p5.loadImage(m.img)
      const { x, y } = c
      return new MemberCanvas(
        m.id, 
        m.name, 
        x - halfSize, 
        y - halfSize, 
        memberSize, 
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
    p5.background(217, 50, 50)
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
        return m.tags && m.tags.includes(category)
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
      const m = members.find(m => m.id === t.id)
      if(m){
        const center = m.getCenter()
        p5.ellipse(center.x, center.y, m.size + 2)
        p5.image(m.img, m.coordinates.x, m.coordinates.y, m.size, m.size)
      }
    })
  } 

  const getLine = (category: string) => {
    switch (category.toLowerCase()){
      case 'frontend':
        return {
          color: {
            r: 255, 
            g: 255, 
            b: 255
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
      case 'management':
        return {
          color: {
            r: 255, 
            g: 255, 
            b: 255
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
  }


  const mouseDragged = (p5: p5Types) => {
    setDrag(true)
    const { mouseX, mouseY } = p5
    const halfSize = Math.floor(size)
    const x = mouseX > halfSize ? (mouseX < (canvas.width - halfSize) ? mouseX : canvas.width - halfSize) : halfSize
    const y = mouseY > halfSize ? (mouseY < (canvas.height - halfSize) ? mouseY : canvas.height - halfSize) : halfSize
    if (mouseX === x || mouseY === y) {
      if (drag) {
        if (draggedMember) {
          draggedMember.setNewCenter(x, y)
        }
      } else {  
        const member = getActiveElement(p5, x, y)
        if (member) {
          member.setNewCenter(x, y)
          setDraggedMember(member)
        }
      }
    return false
    } 
  }

  const mouseReleased = () => {
    setTimeout(() => {
      setDraggedMember(null)
      setDrag(false)
    })
  }

  const mouseClicked = (p5: p5Types) => {
    const { mouseX, mouseY } = p5
    const member = getActiveElement(p5, mouseX, mouseY)
    if (member && !drag) {
      if (!activeMember || activeMember.id !== member.id) {
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

  const getMemberStyle = (right: boolean) => {
    if (activeMember) {
      const top = activeMember.coordinates.y
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
      {activeMember && <MemberDescription visible={!!activeMember} right={rightActiveMember} memberStyle={memberStyle}
          member={activeMember} handleClick={handleClick} toggleDescription={toggleDescription} />}
    </div>
  )
}

export default TeamRelations