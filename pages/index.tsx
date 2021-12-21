import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect, createRef } from 'react'
import { CloudType } from '../constants/enums'
import { getAngleBetweenPoints, getDistanceBetweenPoints } from '../lib/dom-utils'
import { radiansToDegrees } from '../lib/math-utils'
import { useGlobalMouseUp } from '../lib/react-hooks'
import styles from '../styles/Home.module.css'
import { Cloud, Vector } from '../types/common/interfaces'

const testClouds: Cloud[] = [
  {
    img: { 
      url: '/moon.png',
      alt: 'The moon in a cloud'
    },
    slug: 'the-moon',
    title: 'The Moon',
    type: CloudType.NAV,
    parent: false,
    private: false,
    ref: createRef(),
  },
  {
    img: { 
      url: '/stars.png',
      alt: 'The stars in a cloud'
    },
    slug: 'the-stars',
    title: 'The Stars',
    type: CloudType.CONTENT,
    parent: false,
    private: false,
    ref: createRef(),
  },
  {
    img: { 
      url: '/twinkling.png',
      alt: 'Twinkling in a cloud'
    },
    slug: 'twinkling',
    title: 'Twinkling',
    type: CloudType.POST,
    parent: false,
    private: false,
    ref: createRef(),
  }
]

const Home: NextPage = () => {
  const flashlightRef = useRef<HTMLDivElement>(null)
  const [ flashlightRotation, setFlashlightRotation ] = useState(0)
  const [ lightLength, setLightLength ] = useState(200)
  const [ flashlightPivotCoords, setFlashlightPivotCoords ] = useState<Vector>({x: 0, y: 0})
  const [ initialFlashlightHeight, setInitialFlashlightHeight ] = useState(0)

  const cloudOrbitRef = useRef<HTMLDivElement>(null)
  const [ cloudOrbitRotation, setCloudOrbitRotation ] = useState(0)
  const [ cloudOrbitRadius, setCloudOrbitRadius ] = useState(0)
  const [ cloudOrbitPivotCoords, setCloudOrbitPivotCoords ] = useState<Vector>({x: 0, y: 0})
  const [ clouds, setClouds ] = useState<Cloud[]>(testClouds)

  const [ selectedCloud, setSelectedCloud] = useState<Cloud | false>(false)
  const [ isDragging, setIsDragging ] = useState(false)
  const [ dragStart, setDragStart ] = useState<Vector>({x: 0, y: 0})
  const [ dragEnd, setDragEnd ] = useState<Vector>({x: 0, y: 0})
  const [ dragStartCloudOrbitRotation, setDragStartCloudOrbitRotation ] = useState(0)

  useEffect(() => {
    const flashlightRect = flashlightRef.current?.getBoundingClientRect() || new DOMRect()
    
    if (!flashlightPivotCoords.x && !flashlightPivotCoords.y) {
      const pivot: Vector = { x: flashlightRect.left + flashlightRect.width / 2, y: flashlightRect.bottom }
      setFlashlightPivotCoords(pivot)
    }

    if (!initialFlashlightHeight) {
      setInitialFlashlightHeight(flashlightRect.height)
    }

    const cloudOrbitRect = cloudOrbitRef.current?.getBoundingClientRect() || new DOMRect()

    if (!cloudOrbitPivotCoords.x && !cloudOrbitPivotCoords.y) {
      const pivot: Vector = { x: cloudOrbitRect.left + cloudOrbitRect.width / 2, y: cloudOrbitRect.top + cloudOrbitRect.height / 2}
      setCloudOrbitPivotCoords(pivot)
      setCloudOrbitRotation(20)
    }

    if (!cloudOrbitRadius) {
      setCloudOrbitRadius(cloudOrbitRect.width / 2)
    }
   }, [
    initialFlashlightHeight, flashlightPivotCoords.x, flashlightPivotCoords.y, flashlightRef,
    cloudOrbitRadius, cloudOrbitPivotCoords.x, cloudOrbitPivotCoords.y
  ])

  useGlobalMouseUp((event: MouseEvent) => {
    if (flashlightRef) {
      setFlashlightRotation(getAngleBetweenPoints(flashlightPivotCoords, {x: event.clientX, y: event.clientY}))
      setLightLength(getDistanceBetweenPoints(flashlightPivotCoords, {x: event.clientX, y: event.clientY}) - initialFlashlightHeight)
    }
  }, flashlightRef)

  const dragStartHandler: any = (event: MouseEvent) => {
    if (!isDragging) {
      setIsDragging(true)
      setDragStart({x: event.clientX, y: event.clientY})
      setDragStartCloudOrbitRotation(cloudOrbitRotation)
    }
  }

  const dragEndHandler: any = (event: MouseEvent) => {
    if (isDragging) {
      setIsDragging(false)
      setDragEnd({x: event.clientX, y: event.clientY})
      setDragStartCloudOrbitRotation(0)
    }
  }

  const dragHandler: any = (event: MouseEvent) => {
    if (isDragging) {
      setCloudOrbitRotation(
        dragStartCloudOrbitRotation + 
        radiansToDegrees(
          Math.atan2(
            event.clientY - dragStart.y,
            event.clientX - dragStart.x
          )
        )
      )
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Kenrick Halff</title>
        <meta name="description" content="Portfolio of a fullstack developer - Websites, apps and games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} onMouseUp={dragEndHandler} onMouseMove={dragHandler}>
        <div className={styles.stars} data-testid="stars"></div>
        <div className={styles.twinkling} data-testid="twinkling"></div>

        <div className={styles.moon}>
          <Image src="/moon.png" alt="Image of the moon" width={100} height={100} />
        </div>

        <div className={styles.cloudOrbit} style={{transform: `translate(-50%, -50%) rotate(${cloudOrbitRotation}deg)`}} data-testid="cloudOrbit" ref={cloudOrbitRef}>
          {clouds.map((c, i) => {
            const cloudOffsetInDegrees = 6;
            const left = cloudOrbitRadius * Math.sin(cloudOffsetInDegrees * i * -1) + cloudOrbitRadius,
                  top = cloudOrbitRadius * Math.cos(cloudOffsetInDegrees * i + Math.PI) + cloudOrbitRadius,
                  transform = `translate(-50%, -50%) rotate(${-cloudOrbitRotation}deg)`;
            return <div className={`${styles.cloud} ${c === selectedCloud && styles.selected}`}
                        style={{left, top, transform}}
                        ref={c.ref}
                        data-testid={`cloud-${i}`} key={`cloud-${i}`}
                        onClick={(_) => setSelectedCloud(c)}
                        onMouseDown={dragStartHandler}></div>
          })}
        </div>

        <div className={styles.silhouette}>
          <Image src="/silhouette.svg" alt="Silhouette of Kenrick Halff looking into the night sky" width={50} height={200} />
          <div className={styles.flashlight} style={{transform: `rotate(${flashlightRotation}deg)`}} data-testid="flashlight" ref={flashlightRef}>
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
