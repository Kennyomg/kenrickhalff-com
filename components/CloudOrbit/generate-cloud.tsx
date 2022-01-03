import { NextRouter } from "next/router";
import { Dispatch, SetStateAction, MouseEventHandler, TouchEventHandler } from "react";
import styles from '../../styles/Cloud.module.css'
import { Cloud } from "../../types/common/interfaces";

interface CloudProps {
  radius: number
  rotation: number
  offset: number
  selectedCloud: Cloud | false
  setSelectedCloud: Dispatch<SetStateAction<Cloud | false>>
  isDragging: boolean
  mouseDownHandler: MouseEventHandler | TouchEventHandler
  router: NextRouter
}

// eslint-disable-next-line react/display-name
export const generateCloud = ({rotation, radius, offset, selectedCloud, mouseDownHandler, isDragging, setSelectedCloud, router} : CloudProps) => (c: Cloud, i: number) => {
  const left = radius * Math.sin(offset * i * -1) + radius,
        top = radius * Math.cos(offset * i + Math.PI) + radius,
        transform = `translate(-50%, -50%) rotate(${-rotation}deg)`;

  if (c === selectedCloud) {
    return <div className={`${styles.cloud} ${styles.selected}`}
              style={{left, top, transform}}
              ref={c.ref}
              data-testid={`cloud-${i}-selected`} key={`cloud-${i}`}
              onMouseUp={(_) => !isDragging && setSelectedCloud(false)}
              onMouseDown={mouseDownHandler as MouseEventHandler} onTouchStart={mouseDownHandler as TouchEventHandler}></div>
    
  }
  
  return <div className={`${styles.cloud}`}
              style={{left, top, transform}}
              ref={c.ref}
              data-testid={`cloud-${i}`} key={`cloud-${i}`}
              onMouseUp={(_) => !isDragging && (setSelectedCloud(c), router?.push(c.slug))}
              onMouseDown={mouseDownHandler as MouseEventHandler} onTouchStart={mouseDownHandler as TouchEventHandler}></div>
    
}