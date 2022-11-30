import React from 'react'
import Link from 'next/link'
import NavButton from '@src/NavButton'
import Image from 'next/image'
import logo from '@public/logo.svg'
import NavPage from '@src/NavPage'
import About from '@src/About'
import {useRouter} from 'next/router'
import ArchiveDetail from '@src/ArchiveDetail'
import Archive from '@src/Archive'
import {motion} from 'framer-motion'

const menuVariants = {
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      type: 'spring',
    },
  },
}

export interface WebUIProps {
  children: React.ReactNode
  isAppStarted: boolean
  isPageOpened: boolean
  showMenu: boolean
  showHeader: boolean
  onMoveArchivePage: () => void
}

const WebUI = ({children, isAppStarted, showHeader, showMenu, onMoveArchivePage}: WebUIProps) => {
  const router = useRouter()

  return (
    <div>
      <motion.header
        animate={showHeader ? 'show' : 'hide'}
        className="fixed top-0 left-0 right-0 z-20 flex h-[8.25rem] flex-none items-center"
        variants={menuVariants}
      >
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
      </motion.header>
      <main className="relative flex h-[36rem] w-[64rem] items-center justify-center">
        <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center">
          {children}
          {isAppStarted && (
            <>
              <motion.button
                className="absolute left-6 bottom-6 h-[9.375rem] w-[9.375rem] bg-[url('/club.png')] bg-cover bg-center transition-transform hover:scale-110"
                animate={showMenu ? 'show' : 'hide'}
                variants={menuVariants}
                onClick={() => {
                  onMoveArchivePage()
                }}
              >
                <span className="opacity-0">!</span>
              </motion.button>
              <motion.button
                className="absolute right-6 bottom-6 h-[9.375rem] w-[9.375rem] bg-[url('/dict.png')] bg-cover bg-center grayscale transition-transform"
                animate={showMenu ? 'show' : 'hide'}
                variants={menuVariants}
              >
                <span className="opacity-0">!</span>
              </motion.button>
            </>
          )}
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
