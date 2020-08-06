import React, { useState } from 'react'
import Member from './member'
import { FullMember } from './model'

export interface TeamMembers {
  team: FullMember[]
}

const TeamGrid = (props: TeamMembers) => {
  const [open, setOpen] = useState<string>()

  const openDescription = (id: string) => {
    if (open && open === id ) {
      setOpen(null)
    } else {
      setOpen(id)
    }
  }

  const { team } = props

  return (
    <div className="cp-team__grid">
      {team.map(m => (
        <div className="cp-team__grid-item" key={m.id}>
          <Member member={m} openId={open} toggleOpen={openDescription}/>
        </div>
      ))}
    </div>
  )
}

export default TeamGrid