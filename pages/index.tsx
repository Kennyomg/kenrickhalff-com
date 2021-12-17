import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [ flashlightRotation, setFlashlightRotation ] = useState(45)
  const [ lightLength, setLightLength ] = useState(200)

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

        <div className={styles.cloudOrbit} data-testid="cloudOrbit">
          <div className={styles.cloud} data-testid="cloud-1"></div>
          <div className={styles.cloud} data-testid="cloud-2"></div>
          <div className={styles.cloud} data-testid="cloud-3"></div>
          <div className={styles.cloud} data-testid="cloud-4"></div>
        </div>

        <div className={styles.silhouette}>
          <Image src="/silhouette.svg" alt="Silhouette of Kenrick Halff looking into the night sky" width={50} height={200} />
          <div className={styles.flashlight} style={{transform: `rotate(${flashlightRotation}deg)`}} data-testid="flashlight">
            <Image src="/flashlight.svg" alt="Flashlight pointing at the clouds held by Kenrick Halff" width={20} height={44} data-testid="flashlight-svg" />
            <div className={styles.light} style={{height: `${lightLength}px`}}></div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Designed and made by Kenrick Halff
      </footer>
    </div>
  )
}

export default Home
