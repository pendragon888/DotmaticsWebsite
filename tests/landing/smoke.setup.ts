import { test as setup, expect } from '@fixtures/pages.fixture'

setup.describe('Smoke test web application', async () => {
    setup('Verify each page can be accessed', async ({ landingPage, contactUsPage, page }) => {
        await landingPage.goto()
        await expect(page).toHaveTitle('R&D Solution for Digital Transformation')
        await expect (landingPage.bannerHeading).toBeVisible()
        await contactUsPage.goto()
        await expect(page).toHaveTitle('Contact Us | Dotmatics')
        await expect (contactUsPage.bannerHeading).toBeVisible()
    })
})