import { RefObject } from "react"
import { CloudType } from "../../lib/constants/enums"

interface Vector {
  x: number
  y: number
}

interface Cloud {
  img: { url: string, alt: string}
  slug: string
  title: string
  type: CloudType
  parent: Cloud | false
  private: boolean
  ref?: RefObject<HTMLDivElement>
  content?: JSX.Element
}

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

interface CloudOrbitProps {
  clouds: Cloud[]
  radius: number
  rotation: number
  offset: number
  selectedCloud: Cloud | false
  setSelectedCloud: Dispatch<SetStateAction<Cloud | false>>
  isDragging: boolean
  mouseDownHandler: MouseEventHandler | TouchEventHandler
}

interface LayoutProps {
}