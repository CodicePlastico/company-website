export interface ImageSharp {
  fluid: {
    src: string
    presentationHeight: number
    presentationWidth: number
  }
}

export interface VenueImageNode {
  base: string
  childImageSharp: ImageSharp
}

export interface Coordinates {
  x: number
  y: number
}

export type Axis = 'x' | 'y'