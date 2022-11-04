import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ResourceLoader from '../src/ResourceLoader'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface PixiPageProps {}

const PixiPage = ({}: PixiPageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dokkebi Park</title>
        <meta name="description" content="Dokkebi Park" />
      </Head>

      <main className={styles.main}>
        <ResourceLoader
          resources={[
            '/map.png',
            '/playerDown.png',
            '/playerUp.png',
            '/playerLeft.png',
            '/playerRight.png',
            '/mob-sprites-0.png',
            '/mob-sprites-1.png',
            '/mob-sprites-2.png',
          ]}
        >
          <App />
        </ResourceLoader>
      </main>
    </div>
  )
}

export default PixiPage
