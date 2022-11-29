import React, {useMemo, useState} from 'react'
import DraggableGrid, {DraggableItem} from 'ruuri'
import {COLOR_SET, CONTENTS} from '@src/contents'
import Link from 'next/link'
import ArchiveItem from '@src/ArchiveItem'
import Image from 'next/image'
import {ImpressionTracker} from '@src/ImpressionTracker'
import useResizeObserver from 'use-resize-observer'

const COLUMN_COUNT = 5
const GAP = 16

const PAGE_SIZE = 50

export interface ArchiveDetailGridProps {
  containerWidth: number
  images: {url: string}[]
}

const ArchiveDetailGrid = ({containerWidth, images}: ArchiveDetailGridProps) => {
  const [pageIndex, setPageIndex] = useState(0)
  const pagedImages = useMemo(
    () => images.slice(0, (pageIndex + 1) * PAGE_SIZE),
    [images, pageIndex],
  )
  const [gridHeight, setGridHeight] = useState(0)
  const {ref} = useResizeObserver({
    onResize: ({height}) => {
      if (!height) {
        return
      }
      setGridHeight(height)
    },
  })
  const handleLoadMore = () => {
    console.log('!')
    if (images.length > (pageIndex + 1) * PAGE_SIZE) {
      setPageIndex(pageIndex + 1)
    }
  }

  return (
    <div
      className="relative pb-56"
      // style={{
      //   margin: -GAP / 2,
      // }}
      ref={ref}
    >
      {/*<div className="pointer-events-none absolute left-0 right-0" style={{height: gridHeight}} />*/}
      {/*<DraggableGrid dragEnabled={false}>*/}
      {/*  {pagedImages.map(({url}, imageIndex) => (*/}
      {/*    <DraggableItem className="cursor-auto" key={imageIndex}>*/}
      {/*      <div*/}
      {/*        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EAEAEA]"*/}
      {/*        style={{*/}
      {/*          width: (containerWidth - GAP * (COLUMN_COUNT - 1)) / COLUMN_COUNT,*/}
      {/*          margin: GAP / 2,*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <Image src={url} sizes={'200px'} alt="" layout="fill" objectFit={'cover'} />*/}
      {/*      </div>*/}
      {/*    </DraggableItem>*/}
      {/*  ))}*/}
      {/*</DraggableGrid>*/}
      <ul className="grid grid-cols-5 gap-4">
        {pagedImages.map(({url}, imageIndex) => (
          <li
            key={imageIndex}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EAEAEA]"
          >
            <Image src={url} sizes={'200px'} alt="" layout="fill" objectFit={'cover'} />
          </li>
        ))}
      </ul>
      <div className="mt-56">
        <ImpressionTracker onView={handleLoadMore} />
      </div>
    </div>
  )
}

export default ArchiveDetailGrid
