import React from 'react'
import Image from 'next/image'
import NavButton from './NavButton'
import dynamic from 'next/dynamic'
import logo from '@public/logo.svg'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[64rem] flex-1 flex-col items-center">
      <header className="w-full flex-none">
        <nav className="flex w-full justify-between pt-14 pb-10">
          <NavButton>ABOUT</NavButton>
          <div>
            <Image src={logo} width={218} height={46} alt="Dokkebi Park logo" />
          </div>
          <NavButton>ARCHIVE</NavButton>
        </nav>
      </header>
      <main className="relative flex h-[36rem] w-[64rem] items-center justify-center">
        <App />
      </main>
    </div>
  )
}

export default Main
