import React from 'react'
import {COLOR_SET} from '@src/contents'
import Image from 'next/future/image'
import {MasonryInfiniteGrid} from '@egjs/react-infinitegrid'
import AngledText from '@src/AngledText'

export interface ArchiveItemProps {
  title: string
  desc: string
  images: {url: string}[] | {url: string}[][]
  colorIndex: number
}

const ArchiveItem = ({title, desc, images, colorIndex}: ArchiveItemProps) => {
  return (
    <div
      className="group rounded-3xl py-[1.5rem] px-[1.25rem] text-black"
      style={{
        backgroundColor: COLOR_SET[colorIndex],
      }}
    >
      <h2 className="mb-12 text-center text-[2rem] font-semibold underline">
        <AngledText>{title}</AngledText>
      </h2>
      <MasonryInfiniteGrid className="w-full" gap={10} align={'start'}>
        {images.slice(0, 9).map((item, itemIndex) => {
          const imageInfo = Array.isArray(item) ? item[0] : item

          return (
            <div
              key={itemIndex}
              className="min-h-[50px] w-[31%] overflow-hidden rounded-xl bg-[#EAEAEA]"
            >
              <Image
                className="!relative !h-auto !w-full"
                src={imageInfo.url}
                sizes={'100px'}
                fill
                alt=""
                unoptimized
              />
            </div>
          )
        })}
      </MasonryInfiniteGrid>
    </div>
  )
}

export default ArchiveItem
