import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { getCurrentRotation } from '../lib/dom-utils'

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
    const twinkling = screen.getByTestId('twinkling')

    expect(twinkling).toBeInTheDocument()
  })

  it('renders the flashlight', () => {
    const flashlight = screen.getByTestId('flashlight-svg')

    expect(flashlight).toBeInTheDocument()
  })

  it('rotates the flashlight to 45 degrees', () => {
    const flashlight = screen.getByTestId('flashlight')

    expect(getCurrentRotation(flashlight)).toBe(45)
  })

  it('has an orbit for the clouds', () => {
    const cloudOrbit = screen.getByTestId('cloudOrbit')

    expect(cloudOrbit).toBeInTheDocument()
  })

  it.todo('adds clouds to the cloud orbit')

  it.todo('separates the clouds with an specified offset')

  it.todo('selects the first cloud')

  it.todo('points the flashlight at the selected cloud')

  it.todo('selects the next cloud')
})