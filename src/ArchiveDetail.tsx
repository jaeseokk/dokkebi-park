import React, {Fragment, useCallback, useRef, useState} from 'react'
import {COLOR_SET, CONTENTS} from '@src/contents'
import {useRouteQueryValue} from '@src/useRouterQueryValue'
import ArchiveDetailGrid from '@src/ArchiveDetailGrid'
import {Dialog, Transition} from '@headlessui/react'
import Image from 'next/future/image'
import MobInfoBadge from '@src/MobInfoBadge'
import {useKey} from 'react-use'
import {useRouter} from 'next/router'

export interface ArchiveDetailProps {
  scrollContainer: HTMLDivElement | null
}

const ArchiveDetail = ({scrollContainer}: ArchiveDetailProps) => {
  const router = useRouter()
  const cachedArchiveIdref = useRef<number>()
  const archiveId = useRouteQueryValue('archiveId', {asNumber: true})
  const [selectedGroupId, setSelectedGroupId] = useState<number>()
  const handeSelectGroup = (groupId: number) => {
    setSelectedGroupId(groupId)
    router.push(`/archive/${archiveId}/${groupId}`, undefined, {shallow: true})
  }
  const handleUnSelectGroup = useCallback(() => {
    setSelectedGroupId(undefined)
    router.push(`/archive/${archiveId}`, undefined, {shallow: true})
  }, [archiveId])

  useKey(
    'Escape',
    (e) => {
      if (selectedGroupId === undefined) {
        return
      }

      e.preventDefault()

      handleUnSelectGroup()
    },
    undefined,
    [handleUnSelectGroup],
  )

  if (archiveId !== undefined) {
    cachedArchiveIdref.current = archiveId
  }

  if (cachedArchiveIdref.current === undefined) {
    return null
  }

  const info = CONTENTS[cachedArchiveIdref.current]

  return (
    <>
      <div
        className="min-h-full pt-[8.25rem] text-black"
        style={{
          backgroundColor: `var(--archive-bg-${cachedArchiveIdref.current % COLOR_SET.length})`,
        }}
      >
        <div className="mx-auto max-w-[64rem] pb-56">
          <h2 className="mb-[6.25rem] text-5xl underline">{info.title}</h2>
          <p className="text-lg">{info.desc}</p>
          <div className="relative mt-[6.25rem]">
            <ArchiveDetailGrid
              scrollContainer={scrollContainer}
              images={info.images}
              onSelectGroup={handeSelectGroup}
            />
          </div>
        </div>
      </div>
      <Transition appear show={selectedGroupId !== undefined} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={handleUnSelectGroup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-md  transform overflow-hidden rounded-2xl bg-white  align-middle shadow-xl transition-all">
                  {selectedGroupId !== undefined && (
                    <ul>
                      {(info.images[selectedGroupId] as {url: string}[]).map(
                        (imageInfo, imageIndex) => {
                          return (
                            <li key={imageIndex}>
                              <Image
                                className="!relative !h-auto !w-full"
                                src={imageInfo.url}
                                alt=""
                                fill
                                unoptimized
                              />
                            </li>
                          )
                        },
                      )}
                    </ul>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ArchiveDetail
