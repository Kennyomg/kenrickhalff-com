import { useRouter } from 'next/router';
import { Dispatch, forwardRef, MouseEventHandler, SetStateAction, TouchEventHandler } from 'react'
import styles from '../../styles/CloudOrbit.module.css'
import { Cloud } from '../../types/common/interfaces';

interface CloudOrbitProps {
  clouds: Cloud[];
  radius: number;
  rotation: number;
  selectedCloud: Cloud | false;
  setSelectedCloud: Dispatch<SetStateAction<Cloud | false>>;
  isDragging: boolean;
  mouseDownHandler: MouseEventHandler | TouchEventHandler;
  offset: number;
}

const CloudOrbit = forwardRef<HTMLDivElement, CloudOrbitProps>(({ clouds, offset, radius, rotation, selectedCloud, setSelectedCloud, isDragging, mouseDownHandler }, ref) => {
  const router = useRouter()
  return (
    <div className={styles.cloudOrbit} style={{transform: `translate(-50%, -50%) rotate(${rotation}deg)`}} data-testid="cloudOrbit" ref={ref}>
    {clouds.map((c, i) => {
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
        
    })}
    </div>
  )
})


CloudOrbit.displayName = 'CloudOrbit'
export default CloudOrbit