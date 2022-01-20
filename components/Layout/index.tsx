import React, { useState, useRef, useEffect, FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'

import { getAngleBetweenPoints, getDistanceBetweenPoints } from '../../lib/math-utils'
import { useGlobalMouseDown } from '../../lib/react-hooks'
import { clouds as defaultClouds } from '../../lib/constants/clouds'

import CloudOrbit from '../CloudOrbit'
import Silhouette from '../Silhouette'

import styles from '../../styles/Layout.module.scss'
import cloudStyles from '../../styles/Cloud.module.scss'
import buttonStyles from '../../styles/Button.module.scss'

import { Cloud, LayoutProps, Vector } from '../../types/common/interfaces'

const Layout: FC<PropsWithChildren<LayoutProps>> = ({children}) => {
  const router = useRouter()

  const flashlightRef = useRef<HTMLDivElement>(null)
  const [ flashlightRotation, setFlashlightRotation ] = useState(0)
  const [ lightLength, setLightLength ] = useState(200)
  const [ flashlightPivotCoords, setFlashlightPivotCoords ] = useState<Vector>({x: 0, y: 0})
  const [ initialFlashlightHeight, setInitialFlashlightHeight ] = useState(0)

  const cloudOrbitRef = useRef<HTMLDivElement>(null)
  const [ cloudOrbitRotation, setCloudOrbitRotation ] = useState(0)
  const [ cloudOrbitRadius, setCloudOrbitRadius ] = useState(0)
  const [ cloudOrbitPivotCoords, setCloudOrbitPivotCoords ] = useState<Vector>({x: 0, y: 0})
  const [ clouds, setClouds ] = useState<Cloud[]>(defaultClouds)

  const [ selectedCloud, setSelectedCloud] = useState<Cloud | false>(clouds.find((c) => router && c.slug === router.asPath ) || false)
  const [ isMouseDown, setIsMouseDown ] = useState(false)
  const [ isDragging, setIsDragging ] = useState(false)
  const [ dragStartCloudOrbitRotation, setDragStartCloudOrbitRotation ] = useState(0)
  const [ dragStartMouseAngle, setDragStartMouseAngle ] = useState(0)

  useEffect(() => {
    const flashlightRect = flashlightRef.current?.getBoundingClientRect() || new DOMRect()
    
    if (!flashlightPivotCoords.x && !flashlightPivotCoords.y) {
      const pivot: Vector = { x: flashlightRect.left + flashlightRect.width / 2, y: flashlightRect.bottom }
      setFlashlightPivotCoords(pivot)
    }

    if (!initialFlashlightHeight) {
      setInitialFlashlightHeight(flashlightRect.height - 40 /* minus the overlap of the flashlight and light */)
    }

    const cloudOrbitRect = cloudOrbitRef.current?.getBoundingClientRect() || new DOMRect()

    if (!cloudOrbitPivotCoords.x && !cloudOrbitPivotCoords.y) {
      const pivot: Vector = { x: cloudOrbitRect.left + cloudOrbitRect.width / 2, y: cloudOrbitRect.top + cloudOrbitRect.height / 2}
      setCloudOrbitPivotCoords(pivot)
      setCloudOrbitRotation(isMobile ? 20 : 35)
    }

    if (!cloudOrbitRadius) {
      setCloudOrbitRadius(cloudOrbitRect.width / 2)
    }
   }, [
    initialFlashlightHeight, flashlightPivotCoords.x, flashlightPivotCoords.y, flashlightRef,
    cloudOrbitRadius, cloudOrbitPivotCoords.x, cloudOrbitPivotCoords.y
  ])

  useGlobalMouseDown(({ clientX: x , clientY: y }: MouseEvent) => {

    if (flashlightRef) {
      setFlashlightRotation(getAngleBetweenPoints(flashlightPivotCoords, {x, y}))
      setLightLength(getDistanceBetweenPoints(flashlightPivotCoords, {x, y}) - initialFlashlightHeight)
    }
  }, flashlightRef)

  function mouseDownHandler() {
    if (!isMouseDown) setIsMouseDown(true)
  }

  function dragStartHandler({ nativeEvent }: React.MouseEvent | React.TouchEvent) {
    if (!isDragging && isMouseDown) {
      let x = 0, y = 0
      
      if (nativeEvent instanceof MouseEvent) {
        x = nativeEvent.clientX
        y = nativeEvent.clientY
      }

      if (nativeEvent instanceof TouchEvent) {
        x = nativeEvent.changedTouches[0].clientX
        y = nativeEvent.changedTouches[0].clientY
      }
      
      setDragStartCloudOrbitRotation(cloudOrbitRotation)
      setDragStartMouseAngle(getAngleBetweenPoints(cloudOrbitPivotCoords, {x, y}))
      setIsDragging(true)
    }
  }

  function dragEndHandler(): any {
    if (isDragging) {
      setIsDragging(false)
    }

    if (isMouseDown) {
      setIsMouseDown(false)
    }
  }

  function dragHandler(event: React.MouseEvent | React.TouchEvent): any {
    dragStartHandler(event)

    if (isDragging && isMouseDown) {
      let x = 0, y = 0
      
      if (event.nativeEvent instanceof MouseEvent) {
        x = event.nativeEvent.clientX
        y = event.nativeEvent.clientY
      }

      if (event.nativeEvent instanceof TouchEvent) {
        x = event.nativeEvent.changedTouches[0].clientX
        y = event.nativeEvent.changedTouches[0].clientY
      }

      setCloudOrbitRotation(
        dragStartCloudOrbitRotation +
        getAngleBetweenPoints(cloudOrbitPivotCoords, {x, y}) -
        dragStartMouseAngle
      )
      
      setFlashlightRotation(getAngleBetweenPoints(flashlightPivotCoords, {x, y}))
      setLightLength(getDistanceBetweenPoints(flashlightPivotCoords, {x, y}) - initialFlashlightHeight)
    }
  }
  let currentCloudIndex = -1

  if (selectedCloud) {
    currentCloudIndex = clouds.findIndex(c => c.slug === selectedCloud.slug)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Portfolio - Kenrick Halff`}</title>
        <meta name="description" content="Portfolio of a fullstack developer - Websites, apps and games" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} onMouseUp={dragEndHandler} onMouseMove={dragHandler} onTouchMove={dragHandler} onTouchEnd={dragEndHandler}>
        <div className={styles.stars} data-testid="stars"></div>
        <div className={styles.twinkling} data-testid="twinkling"></div>

        <div className={styles.moon} onClick={() => {
          document.body.requestFullscreen();
        }}>
          <Image src="/moon.png" alt="Image of the moon" width={100} height={100} />
        </div>

        <CloudOrbit
          clouds={clouds}
          offset={isMobile ? 5.93 : 6.1}
          radius={cloudOrbitRadius}
          rotation={cloudOrbitRotation}
          selectedCloud={selectedCloud}
          setSelectedCloud={setSelectedCloud}
          isDragging={isDragging}
          mouseDownHandler={mouseDownHandler} 
          ref={cloudOrbitRef} />

        <Silhouette isDragging={isDragging} rotation={flashlightRotation} length={lightLength} ref={flashlightRef}  />

        {(children && selectedCloud) &&
          <div className={`${cloudStyles.cloud} ${cloudStyles.fullscreen}`}>
            <button className={buttonStyles.close} onClick={() => (setSelectedCloud(false), router?.push('/'))}></button>
            
            <article>
              {children}
            </article>

            {currentCloudIndex !== 0 &&
              <button className={buttonStyles.previous} onClick={() => (setSelectedCloud(clouds[currentCloudIndex - 1]), router?.push(clouds[currentCloudIndex - 1].slug))}>Prev</button> }

            {currentCloudIndex !== clouds.length - 1 &&
              <button className={buttonStyles.next} onClick={() => (setSelectedCloud(clouds[currentCloudIndex + 1]), router?.push(clouds[currentCloudIndex + 1].slug))}>Next</button>}
          </div>
        }
      </main>

      <footer className={styles.footer}>
        Designed and made by Kenrick Halff
      </footer>
    </div>
  )
}

export default Layout
