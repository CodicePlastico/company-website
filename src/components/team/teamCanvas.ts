class TeamCanvas {
  width: number
  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  isHorizontalOutside(x: number, size: number): boolean {
    return x > this.width - size || x < 0
  }

  isVerticalOutside(y: number, size: number): boolean {
    return y > this.height - size || y < 0
  }

  leftSide(planet) {
    const center = planet.getCenter()
    return (center.x < (this.width / 2))
  }
}

export default TeamCanvas