import React, { CSSProperties } from 'react';
import MemberCanvas from './memberCanvas';
import classNames from 'classnames'
import { FullMember } from './model';

interface MemberDescriptionProps {
  member: MemberCanvas | FullMember;
  visible: boolean;
  right: boolean;
  memberStyle?: CSSProperties;
  handleClick?: (event: any) => void
  toggleDescription: () => void
}

const MemberDescription = (props: MemberDescriptionProps) => {
  const { visible, right, memberStyle, member, handleClick, toggleDescription } = props
  const descriptionClass = classNames('cp-member__description', {'cp-member__description--visible': visible}, {'cp-member__description--right': right})
  return (
    <div className={descriptionClass} style={memberStyle} onClick={handleClick}>
        <button className="cp-member__description-close" onClick={toggleDescription}>x</button>
        <div className="cp-member__description-info">
          <h5 className="cp-member__description-title">{member.name}</h5>
          <p className="cp-member__description-extras"><strong>{member.nick && <>@{member.nick} - </>}{member.role}</strong></p>
        </div>
        <p className="cp-member__description-text">
          {member.description}
        </p>
        {member.social && member.social.length > 0 && <ul className="cp-member__social">
          {member.social.map(s => (  
            <li key={`${member.id}-social-${s.label}`}>
              <a className="cp-member__social-link" href={s.link} target="_blank" rel="noopener noreferrer">{s.label}</a>  
            </li>
          ))}
        </ul>}
      </div>
  )
}

export default MemberDescription;