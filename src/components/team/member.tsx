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
  const nodeImgRef = useRef(null)

  const { member, openId, toggleOpen } = props
  const open = openId === member.id

  const rightSide = (img) => {
    const halfWindowWidth = window.innerWidth / 2;
    const center = img.x + (img.width / 2)
    return center > halfWindowWidth
  }

  const availableSpace = (img, isRight) => {
    if (window.innerWidth > 768) {
      const space = 30
      if (!isRight) {
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

  const imgCallBack = useCallback(node => {
    if (node !== null) {
      nodeImgRef.current = node
      setDescriptionStyle(node.getBoundingClientRect())
    }
  }, []);

  const handleResize = () => {
    if (nodeImgRef.current) {
      setDescriptionStyle(nodeImgRef.current.getBoundingClientRect())
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  })

  const plusClass = classNames('cp-member__plus', { 'cp-member__plus--hidden': open })
  const contentClass = classNames('cp-member__content', { 'cp-member__content--open': open })

  const descriptionStyle = {
    width: width
  }

  const toggleDescription = () => {
    toggleOpen(member.id)
  }

  return (
    <article className="cp-member" ref={imgCallBack}>
      <div className={contentClass}>
        <div className="cp-member__image">
          <img className="cp-member__img cp-member__img--default" src={member.img} alt={member.name} />
          {member.imgHover && (
            <img className="cp-member__img cp-member__img--hover" src={member.imgHover} alt="" aria-hidden="true" />
          )}
        </div>
        <div className="cp-member__info">
          <h2 className="cp-member__title"><span>{member.name}</span></h2>
          <p>{member.nick && <>@{member.nick}</>} {member.nick && member.role && <>-</>} {member.role}</p>
        </div>
        <button className={plusClass} onClick={toggleDescription}>+</button>
      </div>
      <MemberDescription visible={open} right={right} memberStyle={descriptionStyle} member={member} toggleDescription={toggleDescription} />
    </article>
  )
}

export default Member