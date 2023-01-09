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

  const height = getDimensions()?.height || 1000

  if (!show) {
    return null
  }

  return (
    <motion.div
      initial={{clipPath: 'circle(0px)'}}
      animate={{
        clipPath: `circle(${height + 200}px)`,
        transition: {
          type: 'spring',
          stiffness: 20,
        },
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-10"
      ref={register}
    >
      <div className="h-full overflow-auto">{show ? children : null}</div>
    </motion.div>
  )
}

export default NavPage
