export interface Channel {
  label: string;
  link: string;
}

export interface MemberModel {
  id: string;
  name: string
  nick: string 
  role: string
  description: string
  social: Channel[]
}

export interface FullMember extends MemberModel {
  img: string
}