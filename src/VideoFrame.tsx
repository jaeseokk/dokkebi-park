import React from 'react'
import {motion} from 'framer-motion'
import {useDimensions} from '@src/hooks'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false})

export interface VideoFrameProps {
  url?: string
  onEnded: () => void
}

const VideoFrame = ({url, onEnded}: VideoFrameProps) => {
  const {getDimensions} = useDimensions()
  const height = getDimensions()?.height || 1000

  return (
    <motion.div
      className="pointer-events-none fixed left-0 bottom-0 right-0 top-0 z-50 pt-[56.25%]"
      initial={{clipPath: 'circle(0px)'}}
      animate={{
        clipPath: `circle(${height + 200}px)`,
        transition: {
          type: 'spring',
          stiffness: 20,
        },
      }}
    >
      <button
        className="pointer-events-auto absolute top-4 right-8 z-[1] flex items-center justify-center text-6xl opacity-30 hover:opacity-100"
        onClick={onEnded}
      >
        &times;
      </button>
      <ReactPlayer
        className="absolute top-0 left-0"
        url={url}
        playing={true}
        onEnded={onEnded}
        height={'100%'}
        width={'100%'}
      />
    </motion.div>
  )
}

export default VideoFrame
