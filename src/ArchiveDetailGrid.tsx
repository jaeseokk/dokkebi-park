import React, {useMemo, useState} from 'react'
import Image from 'next/future/image'
import {MasonryInfiniteGrid} from '@egjs/react-infinitegrid'

const PAGE_SIZE = 50

const getGridGroupItems = <T,>(list: T[] | T[][], groupKey: number, count: number) => {
  const nextKey = groupKey * count

  return list.slice(nextKey, nextKey + count).map((image) => ({
    groupKey,
    data: image,
  }))
}

export interface ArchiveDetailGridProps {
  scrollContainer: HTMLDivElement | null
  images: {url: string}[] | {url: string}[][]
  onSelectGroup: (groupId: number) => void
}

const ArchiveDetailGrid = ({scrollContainer, images, onSelectGroup}: ArchiveDetailGridProps) => {
  const [gridItems, setGridItems] = useState(() => getGridGroupItems(images, 0, PAGE_SIZE))

  if (!scrollContainer) {
    return null
  }

  return (
    <MasonryInfiniteGrid
      className="w-full"
      align={'start'}
      gap={10}
      scrollContainer={scrollContainer || undefined}
      onRequestAppend={(e) => {
        const nextGroupKey = (+e.groupKey! || 0) + 1

        const nextItems = getGridGroupItems(images, nextGroupKey, PAGE_SIZE)

        if (nextItems.length === 0) {
          return
        }

        setGridItems((prev) => {
          return [...prev, ...nextItems]
        })
      }}
    >
      {gridItems.map(({data, groupKey}, itemIndex) => {
        const isGroup = Array.isArray(data)
        const imageInfo = isGroup ? data[0] : data

        return (
          <div
            data-grid-groupkey={groupKey}
            key={itemIndex}
            className="min-h-[100px] w-[19%] overflow-hidden rounded-xl bg-[#EAEAEA]"
          >
            {isGroup ? (
              <button
                className="block w-full"
                onClick={() => {
                  onSelectGroup(itemIndex)
                }}
              >
                <Image
                  src={imageInfo.url}
                  sizes={'100px'}
                  fill
                  alt={''}
                  className="!relative !h-auto !w-full"
                />
              </button>
            ) : (
              <Image
                src={imageInfo.url}
                sizes={'100px'}
                fill
                alt={''}
                className="!relative !h-auto !w-full"
              />
            )}
          </div>
        )
      })}
    </MasonryInfiniteGrid>
  )
}

export default ArchiveDetailGrid
