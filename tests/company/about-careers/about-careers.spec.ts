import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Careers page for Dotmatics", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test.beforeEach(async ({ aboutCareersPage }) => {
        await aboutCareersPage.goto()
    })

    test('Validate Careers page is present', async ({ aboutCareersPage, page }) => {
        await expect(aboutCareersPage.exploreAvailablePositionsLink).toBeVisible()
        await expect(aboutCareersPage.exploreAvailablePositionsLink).toContainText('Explore Available Positions')
        await expect(page.getByText('At Dotmatics, we are Science Driven, Customer Centric, and Better Together. Our global team of 800+ colleagues is united by a shared mission: to accelerate scientific innovation and help make the world a healthier, cleaner, and safer place to live.')).toBeVisible()
    })
})