import Planet from "./planet"
import p5Types from 'p5'
import { Coordinates } from './model'

class Universe {
  width: number
  height: number
  p5: p5Types

  constructor(p5: p5Types, width: number, height: number) {
    this.width = width
    this.height = height
    this.p5 = p5
  }

  isHorizontalOutside(x: number, size: number): boolean {
    return x > this.width - size || x < 0
  }

  isVerticalOutside(y: number, size: number): boolean {
    return y > this.height - size || y < 0
  }

  detectCollision(planet1: Planet, planet2: Planet) {
    const firstCenter = planet1.getCenter()
    const secondCenter = planet2.getCenter()
    const dist = this.p5.dist(firstCenter.x, firstCenter.y, secondCenter.x, secondCenter.y)
    const firstSize = Math.floor(planet1.size / 2)
    const secondSize = Math.floor(planet2.size / 2)
    const collision = dist <= (firstSize + secondSize)
    return collision;
  }
}

export default Universe