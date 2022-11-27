import React, {useMemo} from 'react'
import Link from 'next/link'
import NavButton from '@src/NavButton'
import Image from 'next/image'
import logo from '@public/logo.svg'
import NavPage from '@src/NavPage'
import About from '@src/About'
import {useRouter} from 'next/router'

import dynamic from 'next/dynamic'
import ArchiveDetail from '@src/ArchiveDetail'
import {useKey} from 'react-use'
import Archive from '@src/Archive'

export interface WebUIProps {
  children: React.ReactNode
}

const WebUI = ({children}: WebUIProps) => {
  const router = useRouter()
  // const isPageOpened = useMemo(() => {
  //   return !!router.query.page
  // }, [router.query.page])

  useKey('Escape', (e) => {
    e.preventDefault()

    router.push('/', undefined, {shallow: true})
  })

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-20 flex h-[8.25rem] flex-none items-center">
        <nav className="mx-auto flex w-full max-w-[64rem] items-center justify-between">
          <Link
            href={{
              pathname: '/about',
            }}
            shallow
            passHref
          >
            <NavButton>ABOUT</NavButton>
          </Link>
          <Link href={'/'} shallow>
            <a>
              <Image src={logo} width={218} height={46} alt="Dokkebi Park logo" />
            </a>
          </Link>
          <Link
            href={{
              pathname: '/archive',
            }}
            shallow
            passHref
          >
            <NavButton>ARCHIVE</NavButton>
          </Link>
        </nav>
      </header>
      <main className="relative flex h-[36rem] w-[64rem] items-center justify-center">
        <div className="fixed left-1/2 top-[8.25rem] flex h-[36rem] w-[64rem] translate-x-[-50%] items-center justify-center">
          {children}
        </div>
        <NavPage show={router.query.pageName === 'about'} openStartPosition={'left-top'}>
          <About />
        </NavPage>
        <NavPage
          show={router.query.pageName === 'archive' && router.query.archiveId === undefined}
          openStartPosition={'right-top'}
        >
          <Archive />
        </NavPage>
        <NavPage
          show={router.query.pageName === 'archive' && router.query.archiveId !== undefined}
          openStartPosition={'left-bottom'}
        >
          <ArchiveDetail />
        </NavPage>
      </main>
    </div>
  )
}

export default WebUI
