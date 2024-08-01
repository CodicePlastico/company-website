import p5Types from 'p5'
import { Coordinates, Channel, DescriptionParamsFunction } from './model'

class MemberCanvas {
  id: string
  name: string
  coordinates: Coordinates
  size: number
  img: p5Types.Image
  tags: string[]
  nick: string
  description: string
  descriptionParams: Record<string,DescriptionParamsFunction>
  role: string
  social: Channel[]

  constructor(
    memberId: string, 
    memberName: string, 
    x: number, 
    y: number, 
    size: number, 
    img: p5Types.Image, 
    tags: string[],
    nick: string,
    description: string,
    descriptionParams: Record<string,DescriptionParamsFunction>,
    role: string,
    social: Channel[]
  ) {
    this.id = memberId
    this.name = memberName
    this.coordinates = { x, y}
    this.size = size
    this.img = img
    this.tags = tags
    this.nick = nick
    this.description = description
    this.descriptionParams = descriptionParams
    this.role = role 
    this.social = social
  }

  getCenter(): Coordinates {
    const halfSize = Math.floor(this.size / 2)
    return {
      x: this.coordinates.x + halfSize,
      y: this.coordinates.y + halfSize,
    }
  }

  setNewCenter(mouseX, mouseY) {
    const halfSize = Math.floor(this.size / 2)
    const x = mouseX - halfSize 
    const y = mouseY - halfSize 
    this.coordinates = { x, y }
  }
}

export default MemberCanvas