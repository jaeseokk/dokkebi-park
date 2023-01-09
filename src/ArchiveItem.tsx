import React from 'react'
import {COLOR_SET} from '@src/contents'
import Image from 'next/image'

export interface ArchiveItemProps {
  title: string
  desc: string
  images: {url: string}[]
  colorIndex: number
}

const ArchiveItem = ({title, desc, images, colorIndex}: ArchiveItemProps) => {
  return (
    <div
      className="rounded-3xl py-[1.5rem] px-[1.5rem] text-black"
      style={{
        backgroundColor: COLOR_SET[colorIndex],
      }}
    >
      <h2 className="mb-14 text-5xl underline">{title}</h2>
      <ul className="grid grid-cols-3 gap-2">
        {images.slice(0, 9).map(({url}, imageIndex) => (
          <li
            key={imageIndex}
            className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#EAEAEA]"
          >
            <Image src={url} alt="" layout="fill" objectFit={'cover'} />
          </li>
        ))}
      </ul>
      {/*<p className="mt-12 whitespace-pre-line">{desc}</p>*/}
    </div>
  )
}

export default ArchiveItem
