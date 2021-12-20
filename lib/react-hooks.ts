import { MouseEventHandler, useEffect } from "react"

export const useWindowEvent = (event: string, callback: any, dep?: any) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback, dep])
}

export const useGlobalMouseUp = (callback: any, dep?: any) => {
  return useWindowEvent('mouseup', callback, dep)
}

export const useGlobalMouseMove = (callback: any, dep?: any) => {
  return useWindowEvent('mousemove', callback, dep)
}