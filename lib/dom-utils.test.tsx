import React from 'react'
import { render, screen } from '@testing-library/react'
import { getCurrentRotation, getAngleBetweenElements } from './dom-utils'

describe('DOM utility functions', () => {
  it('should get the rotation of an element', () => {
    render(<div style={{transform: 'rotate(45deg)'}}>Hello there</div>)
    const element = screen.getByText('Hello there')

    expect(getCurrentRotation(element)).toBe(45)
  })

  it('should get the angle between 2 elements', () => {
    const [top1, top2, left1, left2] = [200, 100, 100, 200]
    
    render(<>
      <div style={{ position: 'absolute', top: top1, left: left1 }}>Hello</div>
      <div style={{ position: 'absolute', top: top2, left: left2 }}>There</div>
    </>)

    const element1 = screen.getByText('Hello')
    const element2 = screen.getByText('There')

    const emptyClientRect = element1.getBoundingClientRect()

    element1.getBoundingClientRect = jest.fn(() => ({
      ...emptyClientRect,
      y: top1, x: left1
    }))

    element2.getBoundingClientRect = jest.fn(() => ({
      ...emptyClientRect,
      y: top2, x: left2
    }))

    expect(getAngleBetweenElements(element1, element2)).toBe(45)
  })
})