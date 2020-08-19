import p5Types from 'p5'
import { Coordinates } from './model'

class MemberCanvas {
  memberId: string
  memberName: string
  coordinates: Coordinates
  size: number
  img: p5Types.Image


  constructor(memberId: string, memberName: string, x: number, y: number, size: number) {
    this.memberId = memberId
    this.memberName = memberName
    this.coordinates = { x, y}
    this.size = size
  }

  getCenter(): Coordinates {
    const halfSize = Math.floor(this.size / 2)
    return {
      x: this.coordinates.x + halfSize,
      y: this.coordinates.y + halfSize,
    }
  }
}

export default MemberCanvas