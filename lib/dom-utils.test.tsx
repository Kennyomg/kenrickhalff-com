import React from 'react'
import { render, screen } from '@testing-library/react'
import { getCurrentRotation } from './dom-utils'

describe('DOM utility functions', () => {
  it('should get the rotation of an element', () => {
    render(<div style={{transform: 'rotate(45deg)'}} data-testid="hello">Hello there</div>)
    const element = screen.getByTestId('hello')

    expect(getCurrentRotation(element)).toBe(45)
  })
})