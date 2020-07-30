import p5Types from 'p5'
import { Coordinates, Axis } from './model'

class Planet {
  planetId: string
  planetName: string
  coordinates: Coordinates
  size: number
  img: p5Types.Image
  xDirection: number;
  yDirection: number;

  constructor(planetId: string, planetName: string, startX: number, startY: number, size: number, img: p5Types.Image) {
    this.planetName = planetName
    this.planetId = planetId,
    this.coordinates = {x: startX, y: startY}
    this.size = size
    this.img = img
    this.xDirection = Math.random() > 0.5 ? 1 : -1;
    this.yDirection = Math.random() > 0.5 ? 1 : -1;
  }

  nextCoordinates(): Coordinates {
    const x = this.coordinates.x + this.xDirection
    const y = this.coordinates.y + this.yDirection
    return {x, y}
  }

  setCoordinates(coords: Coordinates) {
    this.coordinates = coords;
  }

  getCenter(): Coordinates {
    const halfSize = Math.floor(this.size / 2)
    return {x: this.coordinates.x + halfSize, y: this.coordinates.y + halfSize}
  }

  invertDirection(axis?: Axis) {
    switch (axis) {
      case 'x':
        this.xDirection = -1 * this.xDirection
        break;
      case 'y':
        this.yDirection = -1 * this.yDirection
        break;
      default:
        this.xDirection = -1 * this.xDirection
        this.yDirection = -1 * this.yDirection
    }
  }

  fixMovement(universe) {
    const nextCoords = this.nextCoordinates();
    let x = nextCoords.x
    let y = nextCoords.y
    if (universe.isHorizontalOutside(nextCoords.x, this.size)) {
      this.invertDirection('x')
      x = this.coordinates.x
    }
    if (universe.isVerticalOutside(nextCoords.y, this.size)) {
      this.invertDirection('y')
      y = this.coordinates.y
    }
    this.setCoordinates({x, y})

  }
}

export default Planet