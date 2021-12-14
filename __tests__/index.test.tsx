import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a footer', () => {
    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
    expect(footer.innerHTML).toBe("Designed and made by Kenrick Halff")
  })

  it('renders the background silhouette svg', () => {
    const silhouette = screen.getByAltText('Silhouette of Kenrick Halff looking into the night sky')

    expect(silhouette).toBeInTheDocument()
  })

  it('renders the moon png', () => {
    const moon = screen.getByAltText('Image of the moon')

    expect(moon).toBeInTheDocument()
  })

  it('renders stars', () => {
    const stars = screen.getByTestId('stars')

    expect(stars).toBeInTheDocument()
  })

  it('makes the stars twinkle', () => {
    const twinkle = screen.getByTestId('twinkling')

    expect(twinkle).toBeInTheDocument()
  })
})