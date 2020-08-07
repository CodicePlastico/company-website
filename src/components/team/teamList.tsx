import React, { useState } from 'react'
import Member from './member'
import { FullMember } from './model'

export interface TeamMembers {
  team: FullMember[]
}

const TeamList = (props: TeamMembers) => {
  return (
    <div className="cp-team__list">
      RELAZIONI
    </div>
  )
}

export default TeamList