import React, { useCallback, useState, useEffect, useRef } from 'react'
import { FullMember } from './model'
import classNames from 'classnames'
import MemberDescription from './memberDescription';

interface MemberProps {
  member: FullMember,
  openId: string,
  toggleOpen: (id: string) => void
}

const Member = (props: MemberProps) => {
  const [right, setRight] = useState(false);
  const [width, setWidth] = useState<number | 'auto'>(0);
  const [nodeImg, setNodeImg] = useState();

  const { member, openId, toggleOpen } = props 
  const open = openId === member.id

  const rightSide = (img) => {
    const halfWindowWidth = window.innerWidth / 2;
    const center = img.x + (img.width / 2)
    return center > halfWindowWidth
  }

  const availableSpace = (img, right) => {
    if (window.innerWidth > 768) {
      const space = 30
      if (!right) {
        return window.innerWidth - img.x - img.width - space
      } 
      return img.x - space
    }
    return 'auto';
  }

  const setDescriptionStyle = (node) => {
    const isRight = rightSide(node)
    setRight(isRight)
    setWidth(availableSpace(node, isRight))
  }

  const handleResize = () => {
    if (nodeImg) {
      setDescriptionStyle(nodeImg)
    }
  }

  const imgCallBack = useCallback(node => {
    if (node !== null) {
      setDescriptionStyle(node)
      setNodeImg(node)
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize)}
  })


  const plusClass = classNames('cp-member__plus', {'cp-member__plus--hidden': open})
  
  const descriptionStyle = {
    width: width
  }

  const toggleDescription = () => {
    toggleOpen(member.id);
  }

  return (
    <div className="cp-member">
      <div className="cp-member__content">
        <img className="cp-member__img" src={member.img} alt={member.name} ref={imgCallBack} />
        <div className="cp-member__info">
          <h4 className="cp-member__title"><span>{member.name}</span></h4>
          <p>{member.nick && <>@{member.nick}</>} {member.nick && member.role && <>-</>} {member.role}</p>
        </div>
        <button className={plusClass} onClick={toggleDescription}>+</button>
      </div>
      <MemberDescription visible={open} right={right} memberStyle={descriptionStyle} member={member} toggleDescription={toggleDescription} />
    </div>
  )
}

export default Member