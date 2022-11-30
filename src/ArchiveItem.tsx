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
      className="rounded-3xl py-[3.875rem] px-[2.375rem] text-black"
      style={{
        backgroundColor: COLOR_SET[colorIndex],
      }}
    >
      <h2 className="mb-14 text-6xl underline">{title}</h2>
      <ul className="grid grid-cols-3 gap-4">
        {images.slice(0, 6).map(({url}, imageIndex) => (
          <li
            key={imageIndex}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EAEAEA]"
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
