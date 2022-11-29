import React, {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import Image from 'next/image'
import mobs from '@src/mobs.json'
import MobInfoBadge from '@src/MobInfoBadge'

export interface MobInfoDialogProps {
  selectedMobIndex?: number
  onClose: () => void
}

const MobInfoDialog = ({selectedMobIndex, onClose}: MobInfoDialogProps) => {
  const show = selectedMobIndex !== undefined

  if (selectedMobIndex === undefined) {
    return null
  }

  const contents = mobs.data[selectedMobIndex]

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
              <Dialog.Panel className="w-full max-w-screen-md  transform overflow-hidden rounded-2xl bg-white bg-[url('/mob-info-background.png')] bg-cover p-6 text-left align-middle shadow-xl transition-all">
                <div className="relative aspect-[1/1]">
                  <Image src={contents.url} alt="" layout="fill" />
                  <div className="absolute right-0 top-0 space-y-2 text-center">
                    <div>
                      <MobInfoBadge group={contents.group}>{contents.group}</MobInfoBadge>
                    </div>
                    <div>
                      <MobInfoBadge size="small" group={contents.group}>
                        {contents.size}
                      </MobInfoBadge>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MobInfoDialog
