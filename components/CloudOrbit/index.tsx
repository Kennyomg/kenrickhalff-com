import { useRouter } from 'next/router';
import { forwardRef } from 'react'
import styles from '../../styles/CloudOrbit.module.scss'
import { CloudOrbitProps } from '../../types/common/interfaces';
import { generateCloud } from './generate-cloud';

const CloudOrbit = forwardRef<HTMLDivElement, CloudOrbitProps>(({ clouds, offset, radius, rotation, selectedCloud, setSelectedCloud, isDragging, mouseDownHandler }, ref) => {
  const router = useRouter()

  return (
    <div className={styles.cloudOrbit} style={{transform: `translate(-50%, -50%) rotate(${rotation}deg)`}} data-testid="cloudOrbit" ref={ref}>
      {clouds.map(generateCloud({rotation, radius, offset, selectedCloud, mouseDownHandler, isDragging, setSelectedCloud, router}))}
    </div>
  )
})


CloudOrbit.displayName = 'CloudOrbit'
export default CloudOrbit