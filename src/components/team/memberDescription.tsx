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
        <button className="cp-member__description-close" onClick={toggleDescription}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </button>
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