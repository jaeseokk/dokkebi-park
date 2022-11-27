import React from 'react'
import dynamic from 'next/dynamic'
import WebUI from '@src/WebUI'
import {useRouter} from 'next/router'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface MainProps {}

const Main = ({}: MainProps) => {
  const router = useRouter()

  return (
    <WebUI>
      <App
        onSelectMob={async () => {
          await router.push('/archive/0', undefined, {shallow: true})
        }}
        onMoveFirstArchiveDetail={async () => {
          await router.push('/archive/0', undefined, {shallow: true})
        }}
      />
    </WebUI>
  )
}

export default Main
