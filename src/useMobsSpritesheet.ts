import * as PIXI from 'pixi.js'
import {Texture} from 'pixi.js'
import {MOB_CONFIG_LIST} from './constants'

export interface UseMobsSpritesheetParam {
  spritesheetUrls: string[]
  frameWidth: number
  frameHeight: number
}

export const useMobsSpritesheet = ({
  spritesheetUrls,
  frameWidth,
  frameHeight,
}: UseMobsSpritesheetParam) => {
  const textures = spritesheetUrls.map((spritesheetUrl) => PIXI.utils.TextureCache[spritesheetUrl])

  const frames: [Texture, Texture][] = []

  let index = 0
  textures.forEach((texture, textureIndex) => {
    const {baseTexture, width, height} = texture

    for (let y = 0; y < height; y += frameHeight) {
      for (let x = 0; x < width; x += frameWidth) {
        const mobConfig = MOB_CONFIG_LIST[index]

        if (!mobConfig) {
          return
        }

        const boundaryHeightScale =
          mobConfig.boundaryHeightScale || (mobConfig.scale && mobConfig.scale < 0.5 ? 1 : 0.5)

        const texture1 = new PIXI.Texture(
          baseTexture,
          new PIXI.Rectangle(x, y, frameWidth, frameHeight * (1 - boundaryHeightScale)),
        )
        const texture2 = new PIXI.Texture(
          baseTexture,
          new PIXI.Rectangle(
            x,
            y + frameHeight * (1 - boundaryHeightScale),
            frameWidth,
            frameHeight * boundaryHeightScale,
          ),
        )

        frames.push([texture1, texture2])
        index++
      }
    }
  })

  return frames
}
