import * as PIXI from 'pixi.js'
import {Texture} from 'pixi.js'

export interface UseMultiPackedSpritesheetParam {
  spritesheetUrls: string[]
  frameWidth: number
  frameHeight: number
}

export const useMultiPackedSpritesheet = ({
  spritesheetUrls,
  frameWidth,
  frameHeight,
}: UseMultiPackedSpritesheetParam) => {
  const textures = spritesheetUrls.map((spritesheetUrl) => PIXI.utils.TextureCache[spritesheetUrl])

  const frames: Texture[] = []

  for (const texture of textures) {
    const {baseTexture, width, height} = texture

    for (let y = 0; y < height; y += frameHeight) {
      for (let x = 0; x < width; x += frameWidth) {
        frames.push(
          new PIXI.Texture(baseTexture, new PIXI.Rectangle(x, y, frameWidth, frameHeight)),
        )
      }
    }
  }

  return frames
}
