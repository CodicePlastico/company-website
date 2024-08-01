export interface Channel {
  label: string
  link: string
}

export interface DescriptionParamsFunction {
  yearsFrom: number
}

export interface MemberModel {
  id: string
  img: string
  name: string
  nick: string 
  role: string
  description: string
  descriptionParams: Record<string, DescriptionParamsFunction>
  social: Channel[],
  tags: string[]
}

export interface FullMember extends MemberModel {
  img: string
}

export interface Coordinates {
  x: number
  y: number
}