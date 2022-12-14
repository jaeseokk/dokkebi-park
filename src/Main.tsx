import React, {Fragment, Suspense, useMemo, useRef, useState} from 'react'
import dynamic from 'next/dynamic'
import WebUI from '@src/WebUI'
import {useRouter} from 'next/router'
import {AppRef} from '@src/App'
import {useAtom, useAtomValue} from 'jotai'
import {isAppStartedAtom, playerAnimationStatusAtom, selectedVideoIndexAtom} from '@src/stores'
import {Dialog, Transition} from '@headlessui/react'
import {useKey} from 'react-use'
import {useStageSize} from '@src/StageSizeProvider'
import {VIDEOS} from '@src/constants'
import {AnimatePresence, motion} from 'framer-motion'
import VideoFrame from '@src/VideoFrame'
import MobInfoDialog from '@src/MobInfoDialog'
import {useRouteQueryValue} from '@src/useRouterQueryValue'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface MainProps {}

const Main = ({}: MainProps) => {
  const appRef = useRef<AppRef>(null)
  const router = useRouter()
  const playerAnimationStatus = useAtomValue(playerAnimationStatusAtom)
  const isAppStarted = useAtomValue(isAppStartedAtom)
  const [selectedMobId, setSelectedMobId] = useState<string>()
  const [selectedVideoIndex, setSelectedVideoIndex] = useAtom(selectedVideoIndexAtom)
  const isPageOpened = useMemo(() => {
    return !!router.query.pageName
  }, [router.query.pageName])
  const showMenu = isPageOpened || (playerAnimationStatus === 'idle' && !isPageOpened)
  const playSound = isAppStarted && !isPageOpened && selectedVideoIndex === undefined
  const showMobInfo = selectedMobId !== undefined && !isPageOpened
  const isPlaying =
    isAppStarted && !isPageOpened && !showMobInfo && selectedVideoIndex === undefined
  const showHeader = (isPageOpened && isAppStarted && !isPlaying) || isPageOpened
  const groupId = useRouteQueryValue('groupId', {asNumber: true})
  const isArchiveGroupDialogOpen = groupId !== undefined

  useKey(
    'Escape',
    (e) => {
      e.preventDefault()

      if (isArchiveGroupDialogOpen) {
        return
      }

      if (selectedVideoIndex !== undefined) {
        setSelectedVideoIndex(undefined)
      }

      if (showMobInfo) {
        setSelectedMobId(undefined)
        return
      }

      router.push('/', undefined, {shallow: true})
    },
    undefined,
    [showMobInfo, selectedVideoIndex, isArchiveGroupDialogOpen],
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
            onSelectMob={setSelectedMobId}
            forwardedRef={appRef}
          />
        </Suspense>
      </WebUI>
      <MobInfoDialog
        selectedMobId={selectedMobId}
        onClose={() => {
          setSelectedMobId(undefined)
        }}
      />
      {selectedVideoIndex !== undefined && (
        <VideoFrame
          url={VIDEOS[selectedVideoIndex]}
          onEnded={() => {
            setSelectedVideoIndex(undefined)
          }}
        />
      )}
    </>
  )
}

export default Main
