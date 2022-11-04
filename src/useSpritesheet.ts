import * as PIXI from 'pixi.js'
import {useEffect, useState} from 'react'
import {Texture} from 'pixi.js'

const getFrame = (spritesheetUrl: string, frameWidth: number, frameHeight: number) => {
  const {baseTexture, width, height} = PIXI.utils.TextureCache[spritesheetUrl]

  const frames: Texture[] = []

  for (let y = 0; y < height / frameHeight; y += frameHeight) {
    for (let x = 0; x < width; x += frameWidth) {
      frames.push(new PIXI.Texture(baseTexture, new PIXI.Rectangle(x, y, frameWidth, frameHeight)))
    }
  }

  return frames
}

export interface UseSpritesheetParam {
  spritesheetUrl: string
  frameWidth: number
  frameHeight: number
}

export const useSpritesheet = ({spritesheetUrl, frameWidth, frameHeight}: UseSpritesheetParam) => {
  const [sprites, setSprites] = useState<Texture[]>(
    getFrame(spritesheetUrl, frameWidth, frameHeight),
  )

  useEffect(() => {
    setSprites(getFrame(spritesheetUrl, frameWidth, frameHeight))
  }, [frameHeight, frameWidth, spritesheetUrl])

  return sprites
}
