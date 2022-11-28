import {motion, Variants} from 'framer-motion'
import React, {useRef, useState} from 'react'
import {useDimensions} from '@src/hooks'

const variants: Variants = {
  open: ({height = 1000, openStartPosition}) => {
    const startPoint =
      openStartPosition === 'right-top'
        ? '100% 0'
        : openStartPosition === 'left-bottom'
        ? '0 100%'
        : openStartPosition === 'right-bottom'
        ? '100% 100%'
        : '0 0'
    return {
      clipPath: `circle(${height * 2 + 200}px at ${startPoint})`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }
  },
  close: ({openStartPosition}) => {
    const startPoint =
      openStartPosition === 'right-top'
        ? '100% 0'
        : openStartPosition === 'left-bottom'
        ? '0 100%'
        : openStartPosition === 'right-bottom'
        ? '100% 100%'
        : '0 0'
    return {
      clipPath: `circle(0px at ${startPoint})`,
      // transition: {
      //   type: 'spring',
      //   stiffness: 20,
      //   restDelta: 2,
      // },
    }
  },
}

export interface NavPageProps {
  show: boolean
  openStartPosition?: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'
  children: React.ReactNode
}

const NavPage = ({children, show, openStartPosition = 'left-top'}: NavPageProps) => {
  const {getDimensions, register} = useDimensions()
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  const height = getDimensions()?.height

  return (
    <motion.div
      initial={false}
      animate={show ? 'open' : 'close'}
      onAnimationComplete={() => {
        setIsAnimationEnd(true)
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-10"
      variants={variants}
      custom={{height, openStartPosition}}
      ref={register}
    >
      <div className="h-full overflow-auto">{show ? children : null}</div>
    </motion.div>
  )
}

export default NavPage
