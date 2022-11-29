import React, {Suspense, useRef} from 'react'
import dynamic from 'next/dynamic'
import WebUI from '@src/WebUI'
import {useRouter} from 'next/router'
import {AppRef} from '@src/App'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface MainProps {}

const Main = ({}: MainProps) => {
  const appRef = useRef<AppRef>(null)
  const router = useRouter()

  return (
    <WebUI
      onMoveArchivePage={async () => {
        await appRef.current?.playBang()
        await router.push('/archive', undefined, {shallow: true})
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <App
          onSelectMob={async () => {
            await router.push('/archive/0', undefined, {shallow: true})
          }}
          forwardedRef={appRef}
        />
      </Suspense>
    </WebUI>
  )
}

export default Main
