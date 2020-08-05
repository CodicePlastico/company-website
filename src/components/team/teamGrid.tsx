import React from 'react'
import Member from './member'
import { FullMember } from './model'

export interface TeamMembers {
  team: FullMember[]
}

const TeamGrid = (props: TeamMembers) => {
  const { team } = props
  console.log(team)
  return (
    <div className="cp-team-grid">
      {team.map(m => (
        <Member member={m} key={m.id}/>
      ))}
    </div>
  )
}

export default TeamGrid