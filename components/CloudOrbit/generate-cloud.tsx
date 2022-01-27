import Image from "next/image"
import { MouseEventHandler, TouchEventHandler, useState } from "react"
import { PHI } from "../../lib/math-utils"
import styles from '../../styles/Cloud.module.scss'
import { Cloud, CloudProps } from "../../types/common/interfaces"

interface CloudSvgProps {
  width: number
}

const CloudSvg: React.FC<CloudSvgProps> = ({width}) => (
  <svg
    width={`${width}px`}
    height={`${width / PHI}px`}
    viewBox={`0 0 189.94194 61.58213`}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="f1" x="0" y="0" width="200%" height="200%">
        <feOffset result="offOut" in="SourceAlpha" dx="10" dy="10" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
      <radialGradient  id="g1" x1="0" x2="0" y1="0" y2="1" fx="0.75" fy="0.15">
        <stop offset="0%" stopColor="var(--moon-light-gradient-color-1)"/>
        <stop offset="50%" stopColor="var(--moon-light-gradient-color-2)" stopOpacity="1"/>
        <stop offset="75%" stopColor="var(--moon-light-gradient-color-3)" stopOpacity="1"/>
        <stop offset="100%" stopColor="var(--moon-light-gradient-color-3)" stopOpacity="0"/>
      </radialGradient >
    </defs>
    <g filter="url(#f1)">
      <path
        style={{fill:'url(#g1)', strokeLinecap:'butt',strokeLinejoin:'miter',strokeOpacity:1}}
        d="M 26.907109,112.39679 H 182.90023 c 22.66453,-1.34204 7.07862,-33.770612 -6.47133,-20.095186 6.01906,-7.226924 7.05779,-10.61678 5.44953,-14.305044 C 179.3817,72.407298 170.44867,66.60776 157.6961,72.547016 153.20114,63.234075 139.91838,62.25188 135.54107,75.642951 139.00659,67.629041 131.82701,59.738286 119.8899,55.176605 108.80286,50.99304 97.02154,56.910357 93.323394,70.162843 95.226665,58.374391 92.447565,51.755906 81.061924,51.089448 70.870574,50.904847 60.629773,57.589289 64.713301,68.45986 57.578644,51.808317 32.486231,67.835324 44.958716,79.358945 38.58355,69.52885 27.94653,69.318271 23.799168,70.67374 17.735442,72.617713 15.304285,86.903542 25.629873,90.85407 8.1429725,79.354829 2.5278438,99.274398 5.4495413,103.52 c 2.9938304,5.10987 9.6706487,9.0655 21.4575677,8.87679 z" />
    </g>
  </svg>
)

// eslint-disable-next-line react/display-name
export const generateCloud = ({rotation, radius, offset, selectedCloud, mouseDownHandler, isDragging, setSelectedCloud, router} : CloudProps) => (c: Cloud, i: number) => {
  const [ showArrow, setShowArrow ] = useState(true)

  if (isDragging && showArrow) {
    setShowArrow(false)
  }

  const left = radius * Math.sin(offset * i * -1) + radius,
        top = radius * Math.cos(offset * i + Math.PI) + radius,
        transform = `translate(-50%, -50%) rotate(${-rotation}deg)`;

  if (c === selectedCloud) {
    return <div className={`${styles.cloud} ${styles.selected}`}
              style={{left, top, transform}}
              ref={c.ref}
              data-testid={`cloud-${i}-selected`} key={`cloud-${i}`}
              onMouseUp={(_) => !isDragging && setSelectedCloud(false)}
              onMouseDown={mouseDownHandler as MouseEventHandler} onTouchStart={mouseDownHandler as TouchEventHandler}>
                <CloudSvg width={200} />
                <div className={styles.cloudIcon}>
                  <Image src={c.img.url} alt={c.img.alt} width={200 / PHI} height={200 / PHI} />
                </div>
                <div className={`${styles.title}`}>{c.title}</div>
            </div>
    
  }
  
  return <div className={`${styles.cloud} ${(!i && showArrow) && styles.showArrow}`}
              style={{left, top, transform}}
              ref={c.ref}
              data-testid={`cloud-${i}`} key={`cloud-${i}`}
              onMouseUp={(_) => !isDragging && (setSelectedCloud(c), router?.push(c.slug))}
              onMouseDown={mouseDownHandler as MouseEventHandler} onTouchStart={mouseDownHandler as TouchEventHandler}>
                <CloudSvg width={200} />
                <div className={styles.cloudIcon}>
                  <Image src={c.img.url} alt={c.img.alt} width={200 / PHI} height={200 / PHI} />
                </div>
                <div className={`${styles.title}`}>{c.title}</div>
          </div>
    
}