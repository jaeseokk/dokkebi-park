import React, {useRef, useState} from 'react'
import ArchiveItem from '@src/ArchiveItem'
import {divideByColumns} from '@src/utils'
import {COLOR_SET, CONTENTS} from '@src/contents'
import {useRouter} from 'next/router'
import DraggableGrid, {DraggableItem} from 'ruuri'
import {useRouteQueryValue} from '@src/useRouterQueryValue'
import SSRSafeSuspense from '@src/SSRSafeSuspense'
import useResizeObserver from 'use-resize-observer'

const ArchiveDetailGrid = React.lazy(() => import('@src/ArchiveDetailGrid'))

export interface ArchiveDetailProps {}

const ArchiveDetail = ({}: ArchiveDetailProps) => {
  const cachedArchiveIdref = useRef<number>()
  const archiveId = useRouteQueryValue('archiveId', {asNumber: true})
  const [gridContainerWidth, setGridContainerWidth] = useState(0)
  const {ref} = useResizeObserver({
    onResize: ({width}) => {
      if (!width) {
        return
      }
      setGridContainerWidth(width)
    },
  })

  if (archiveId !== undefined) {
    cachedArchiveIdref.current = archiveId
  }

  if (cachedArchiveIdref.current === undefined) {
    return null
  }

  const info = CONTENTS[cachedArchiveIdref.current]

  return (
    <div
      className="min-h-full pt-[8.25rem] text-black"
      style={{
        backgroundColor: `var(--archive-bg-${cachedArchiveIdref.current % COLOR_SET.length})`,
      }}
    >
      <div className="mx-auto max-w-[64rem] pb-56">
        <h2 className="mb-[6.25rem] text-5xl underline">{info.title}</h2>
        <p className="text-lg">{info.desc}</p>
        <div className="relative mt-[6.25rem]" ref={ref}>
          <SSRSafeSuspense fallback={null}>
            <ArchiveDetailGrid containerWidth={gridContainerWidth} images={info.images} />
          </SSRSafeSuspense>
        </div>
      </div>
    </div>
  )
}

export default ArchiveDetail
