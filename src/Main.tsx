import React, {Fragment, Suspense, useMemo, useRef, useState} from 'react'
import dynamic from 'next/dynamic'
import WebUI from '@src/WebUI'
import {useRouter} from 'next/router'
import {AppRef} from '@src/App'
import {useAtomValue} from 'jotai'
import {isAppStartedAtom, playerAnimationStatusAtom} from '@src/stores'
import {Dialog, Transition} from '@headlessui/react'
import {useKey} from 'react-use'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface MainProps {}

const Main = ({}: MainProps) => {
  const appRef = useRef<AppRef>(null)
  const router = useRouter()
  const playerAnimationStatus = useAtomValue(playerAnimationStatusAtom)
  const isAppStarted = useAtomValue(isAppStartedAtom)
  const isPageOpened = useMemo(() => {
    return !!router.query.pageName
  }, [router.query.pageName])
  const showMenu = isPageOpened || (playerAnimationStatus === 'idle' && !isPageOpened)
  const showHeader = isPageOpened || !isAppStarted
  const playSound = isAppStarted && !isPageOpened
  const [_showMobInfo, setShowMobInfo] = useState(false)
  const showMobInfo = _showMobInfo && !isPageOpened
  const isPlaying = isAppStarted && !isPageOpened && !showMobInfo

  useKey(
    'Escape',
    (e) => {
      e.preventDefault()

      if (showMobInfo) {
        setShowMobInfo(false)
        return
      }

      router.push('/', undefined, {shallow: true})
    },
    undefined,
    [showMobInfo],
  )

  return (
    <>
      <WebUI
        isAppStarted={isAppStarted}
        isPageOpened={isPageOpened}
        showMenu={showMenu}
        showHeader={showHeader}
        onMoveArchivePage={async () => {
          await appRef.current?.playBang()
          await router.push('/archive', undefined, {shallow: true})
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <App
            isPlaying={isPlaying}
            playSound={playSound}
            onSelectMob={() => {
              setShowMobInfo(true)
            }}
            forwardedRef={appRef}
          />
        </Suspense>
      </WebUI>
      <Transition appear show={showMobInfo} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setShowMobInfo(false)
          }}
        >
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <p className="text-sm text-gray-500">도깨비 정보가 이 곳에 노출됩니다.</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Main
