import { useWindowEvent, useGlobalMouseUp, useGlobalMouseMove } from './react-hooks'
import { renderHook } from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/react'

const mockCallback = jest.fn() as EventListener

describe('Custom react hooks', () => {

  it('should useWindowEvent', () => {
    renderHook(() => useWindowEvent('click', mockCallback))
    fireEvent.click(window)

    expect(mockCallback).toBeCalled()
  })

  it('should useGlobalMouseUp', () => {
    renderHook(() => useGlobalMouseUp(mockCallback))
    fireEvent.mouseUp(window)

    expect(mockCallback).toBeCalled()
  })

  it('should useGlobalMouseMove', () => {
    renderHook(() => useGlobalMouseMove(mockCallback))
    fireEvent.mouseMove(window)

    expect(mockCallback).toBeCalled()
  })
})