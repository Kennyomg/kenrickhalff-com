import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getAngleBetweenElements, getCurrentRotation, getDistanceBetweenElements } from '../lib/dom-utils'
import Layout from '../components/Layout'

describe('Layout', () => {
  beforeEach(() => {
    render(<Layout />)
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

    expect(getCurrentRotation(flashlight)).toBe(0)
  })

  it('has an orbit for the clouds', () => {
    const cloudOrbit = screen.getByTestId('cloudOrbit')

    expect(cloudOrbit).toBeInTheDocument()
  })

  it('adds clouds to the cloud orbit', () => {
    const cloud = screen.getByTestId('cloud-0')

    expect(cloud).toBeInTheDocument()
  })

  it('separates the clouds with an specified offset', () => {
    const cloud0 = screen.getByTestId('cloud-0'),
          cloud1 = screen.getByTestId('cloud-1'),
          cloud2 = screen.getByTestId('cloud-2')

    expect(getDistanceBetweenElements(cloud0, cloud1)).toBe(getDistanceBetweenElements(cloud1, cloud2))
  })

  it('selects the first cloud', () => {
    const cloud = screen.getByTestId('cloud-0')

    userEvent.click(cloud)

    expect(screen.getByTestId('cloud-0-selected')).toEqual(cloud)

    expect(() => screen.getByTestId('cloud-0')).toThrowError('Unable to find an element by: [data-testid="cloud-0"]')

    userEvent.click(cloud)

    expect(screen.getByTestId('cloud-0')).toEqual(cloud)
  })

  it('points the flashlight at the selected cloud', () => {
    const cloud = screen.getByTestId('cloud-0')

    userEvent.click(cloud)

    const flashlight = screen.getByTestId('flashlight')

    expect(getCurrentRotation(flashlight)).toBe(getAngleBetweenElements(flashlight, cloud))
  })

  it('selects the next cloud', () => {
    const cloud0 = screen.getByTestId('cloud-0'),
          cloud1 = screen.getByTestId('cloud-1')

    userEvent.click(cloud0)

    expect(screen.getByTestId('cloud-0-selected')).toEqual(cloud0)
    expect(() => screen.getByTestId('cloud-0')).toThrowError('Unable to find an element by: [data-testid="cloud-0"]')
    expect(() => screen.getByTestId('cloud-1-selected')).toThrowError('Unable to find an element by: [data-testid="cloud-1-selected"]')

    userEvent.click(cloud1)

    expect(screen.getByTestId('cloud-1-selected')).toEqual(cloud1)
    expect(() => screen.getByTestId('cloud-1')).toThrowError('Unable to find an element by: [data-testid="cloud-1"]')
    expect(() => screen.getByTestId('cloud-0-selected')).toThrowError('Unable to find an element by: [data-testid="cloud-0-selected"]')
  })
})