import {motion, Variants} from 'framer-motion'
import React, {useRef, useState} from 'react'
import {useDimensions} from '@src/hooks'

export interface NavPageProps {
  show: boolean
  useAnimation?: boolean
  children: React.ReactNode
}

const NavPage = React.forwardRef<HTMLDivElement, NavPageProps>(
  ({children, show, useAnimation}, ref) => {
    const {getDimensions, register} = useDimensions()

    const height = getDimensions()?.height || 1000

    if (!show) {
      return null
    }

    return (
      <motion.div
        initial={useAnimation ? {clipPath: 'circle(0px)'} : undefined}
        animate={
          useAnimation
            ? {
                clipPath: `circle(${height + 200}px)`,
                transition: {
                  type: 'spring',
                  stiffness: 20,
                },
              }
            : undefined
        }
        className="fixed top-0 bottom-0 left-0 right-0 z-10"
        ref={register}
      >
        <div className="h-full overflow-auto" ref={ref}>
          {show ? children : null}
        </div>
      </motion.div>
    )
  },
)

export default NavPage

NavPage.displayName = 'NavPage'
