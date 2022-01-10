import React, { useState, useEffect } from 'react'

export const useWindowEvent = (event: string, callback: any, dep?: any) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [event, callback, dep])
}

export const useGlobalMouseUp = (callback: any, dep?: any) => {
  return useWindowEvent('mouseup', callback, dep)
}
export const useGlobalMouseDown = (callback: any, dep?: any) => {
  return useWindowEvent('mousedown', callback, dep)
}

export const useGlobalMouseMove = (callback: any, dep?: any) => {
  return useWindowEvent('mousemove', callback, dep)
}

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size;
}