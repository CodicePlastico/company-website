import React, { useState } from 'react'
import { FullMember } from './model'
import classNames from 'classnames'

interface MemberProps {
  member: FullMember
}

const Member = (props: MemberProps) => {
  const { member } = props 
  const [open, setOpen] = useState(false)

  const plusClass = classNames('cp-member__plus', {'cp-member__plus--hidden': open})
  const descriptionClass = classNames('cp-member__description', {'cp-member__description--visible': open})

  const toggleDescription = () => {
    setOpen(!open);
  }

  return (
    <div className="cp-member">
      <div className="cp-member__content">
        <img className="cp-member__img" src={member.img} alt={member.name} />
        <h4 className="cp-member__title"><span>{member.name}</span></h4>
        <p>{member.nick && <>@{member.nick}</>} - {member.role}</p>
        <button className={plusClass} onClick={toggleDescription}>+</button>
      </div>
      <div className={descriptionClass}>
        <button className="cp-member__description-close" onClick={toggleDescription}>x</button>
        <p className="cp-member__description-text">
          {member.description}
        </p>
        {member.social.length > 0 && <ul className="cp-member__social">
          {member.social.map(s => (  
            <li key={`${member.id}-social-${s.label}`}>
              <a className="cp-member__social-link" href={s.link} target="_blank" rel="noopener noreferrer">{s.label}</a>  
            </li>
          ))}
        </ul>}
      </div>
    </div>
  )
}

export default Member