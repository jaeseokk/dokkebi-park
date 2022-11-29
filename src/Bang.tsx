import {AnimatedSprite, Container, Sprite} from '@inlet/react-pixi'
import React, {ComponentProps, forwardRef, useImperativeHandle, useRef, useState} from 'react'
import * as PIXI from 'pixi.js'
import {useStageSize} from '@src/StageSizeProvider'

const textureCache = PIXI.utils.TextureCache

export interface BangRef {
  play: () => Promise<void>
}

export interface BangProps extends Omit<ComponentProps<typeof AnimatedSprite>, 'isPlaying'> {}

const Bang = forwardRef<BangRef, BangProps>(({...rest}, ref) => {
  const [show, setShow] = useState(false)
  const spriteRef = useRef<PIXI.AnimatedSprite>(null)
  const size = useStageSize()
  const textures = [
    textureCache['/bang1.png'],
    textureCache['/bang2.png'],
    textureCache['/bang3.png'],
    textureCache['/bang4.png'],
    textureCache['/bang5.png'],
    textureCache['/bang6.png'],
    textureCache['/bang7.png'],
    textureCache['/bang8.png'],
    textureCache['/bang9.png'],
    textureCache['/bang10.png'],
    textureCache['/bang11.png'],
    textureCache['/bang12.png'],
    textureCache['/bang13.png'],
    textureCache['/bang14.png'],
  ]

  const scale = Math.max(size.height, size.width) / textures[0].width

  useImperativeHandle(
    ref,
    () => {
      return {
        play: () => {
          setShow(true)
          return new Promise((resolve) => {
            if (!spriteRef.current) {
              return
            }

            spriteRef.current.onComplete = () => {
              setShow(false)
              resolve()
            }
            console.log('play')
            spriteRef.current.play()
          })
        },
      }
    },
    [],
  )

  if (!show) {
    return null
  }

  return (
    <AnimatedSprite
      anchor={0.5}
      textures={textures}
      animationSpeed={0.3}
      scale={scale}
      position={[size.width / 2, size.height / 2]}
      isPlaying={false}
      loop={false}
      {...rest}
      ref={spriteRef}
    />
  )
})

export default Bang

Bang.displayName = 'Bang'
