import { test, expect } from '@playwright/test'

const url = 'http://localhost:1337'

test.describe('The website loads up', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url)
  })

  test('page loaded', async ({ page }) => {
    await expect(page).toHaveURL(url)
  })

  test('the footer shows my name', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toContainText('Kenrick Halff')
  })

  test('the moon is in the sky', async ({ page }) => {
    const moon = page.locator('css=img[alt="Image of the moon"]')
    const imageSrc = await moon.getAttribute('src') || ''

    await page.goto(getImagePath(imageSrc))
    expect(await page.locator('img').screenshot()).toMatchSnapshot('moon.png')
  })

  test('the silhouette is looking at the sky', async ({ page }) => {
    const silhouette = page.locator('css=img[alt="Silhouette of Kenrick Halff looking into the night sky"]')
    const imageSrc = await silhouette.getAttribute('src') || ''

    await page.goto(getImagePath(imageSrc))

    expect(await page.locator('svg').screenshot()).toMatchSnapshot('silhouette.png')
  })

  test('the stars are in the sky', async ({ page }) => {
    const stars = page.locator('[data-testid="stars"]')
    await expect(stars).toBeVisible()
    
  })

  test('the stars are twinkling', async ({ page }) => {
    const twinkling = page.locator('[data-testid="twinkling"]')
    await expect(twinkling).toBeVisible()
  })

  test('the flashlight is visible', async ({ page }) => {
    const flashlight = page.locator('[data-testid="flashlight-svg"]')
    const imageSrc = await flashlight.getAttribute('src') || ''

    await page.goto(getImagePath(imageSrc))

    expect(await page.locator('svg').screenshot()).toMatchSnapshot('flashlight.png')
  })
})

function getImagePath(imageSrc: string) {
  return `${imageSrc[0] === '/' && url}${imageSrc}`
}
