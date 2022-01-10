import { NextRouter, useRouter } from 'next/router';
import { Dispatch, forwardRef, LegacyRef, MouseEventHandler, SetStateAction, TouchEventHandler } from 'react'
import { useWindowSize } from '../../lib/react-hooks';
import styles from '../../styles/CloudOrbit.module.css'
import { Cloud, CloudOrbitProps } from '../../types/common/interfaces';
import { generateCloud } from './generate-cloud';

const CloudOrbit = forwardRef<HTMLDivElement, CloudOrbitProps>(({ clouds, offset, radius, rotation, selectedCloud, setSelectedCloud, isDragging, mouseDownHandler }, ref) => {
  const router = useRouter()
  const [width, height] = useWindowSize()
  return (
    <div className={styles.cloudOrbit} style={{transform: `translate(-50%, -50%) rotate(${rotation}deg)`}} data-testid="cloudOrbit" ref={ref}>
      {clouds.map(generateCloud({rotation, radius, offset, selectedCloud, mouseDownHandler, isDragging, setSelectedCloud, router}))}
    </div>
  )
})


CloudOrbit.displayName = 'CloudOrbit'
export default CloudOrbit