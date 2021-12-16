import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Kenrick Halff</title>
        <meta name="description" content="Portfolio of a fullstack developer - Websites, apps and games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.stars} data-testid="stars"></div>
        <div className={styles.twinkling} data-testid="twinkling"></div>

        <div className={styles.moon}>
          <Image src="/moon.png" alt="Image of the moon" width={100} height={100} />
        </div>
        <div className={styles.silhouette}>
          <Image src="/silhouette.svg" alt="Silhouette of Kenrick Halff looking into the night sky" width={50} height={200} />
          <Image className={styles.flashlight} src="/flashlight.svg" alt="Flashlight pointing at the clouds held by Kenrick Halff" width={20} height={44} data-testid="flashlight" />
        </div>
      </main>

      <footer className={styles.footer}>
        Designed and made by Kenrick Halff
      </footer>
    </div>
  )
}

export default Home
