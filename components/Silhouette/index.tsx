import { FC, forwardRef, PropsWithRef, Ref } from 'react'
import styles from '../../styles/Silhouette.module.css'
import Image from 'next/image'

interface SilhouetteProps {
  isDragging: boolean;
  rotation: number;
  length: number;
}

const Silhouette = forwardRef<HTMLDivElement, SilhouetteProps>(({isDragging, rotation, length}, ref: Ref<HTMLDivElement>) => (
  <div className={styles.silhouette}>
    <Image src="/silhouette.svg" alt="Silhouette of Kenrick Halff looking into the night sky" width={50} height={200} />
    <div className={`${styles.flashlight} ${!isDragging && styles.animate}`} style={{transform: `rotate(${rotation}deg)`}} data-testid="flashlight" ref={ref}>
      <Image src="/flashlight.svg" alt="Flashlight pointing at the clouds held by Kenrick Halff" width={20} height={44} data-testid="flashlight-svg" />
      <div className={`${styles.light} ${!isDragging && styles.animate}`} style={
        {
          borderTop: `${length}px solid var(--flashlight-color)`,
          borderLeft: `${Math.tan(Math.atan(100 / 585) * (180 / Math.PI)) * length / 2}px solid transparent`,
          borderRight: `${Math.tan(Math.atan(100 / 585) * (180 / Math.PI)) * length / 2}px solid transparent`
        }
        }></div>
    </div>
  </div>
))

Silhouette.displayName = 'Silhouette'
export default Silhouette
