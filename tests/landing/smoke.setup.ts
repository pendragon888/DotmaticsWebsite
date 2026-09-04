import { test as setup, expect } from '@fixtures/pages.fixture'
import path from 'path'

setup.describe('Smoke test web application', async () => {
    setup('Verify each page can be accessed', async ({ landingPage, contactUsPage, page }) => {
        await page.context().addCookies([{
            name: 'OptanonConsent',
            value: 'isGpcEnabled=0&datestamp=Fri+Sep+04+2026+22%3A23%3A14+GMT%2B0100+(British+Summer+Time)&version=202411.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=4f37ef82-2829-4c43-9f06-cdc72fe8cdb8&interactionCount=0&isAnonUser=1&landingPath=https%3A%2F%2Fwww.dotmatics.com%2F&groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A0',
            domain: '.dotmatics.com',
            path: '/',
            httpOnly: false,
            secure: false,
            expires: Math.floor(Date.now() / 1000) + 3600
        },
        {
            name: 'OptanonAlertBoxClosed',
            value: '2026-09-04T21:19:37.268Z',
            domain: '.dotmatics.com',
            path: '/',
            httpOnly: false,
            secure: false,
            expires: Math.floor(Date.now() / 1000) + 3600 
        }]);

        const authFile = path.join(__dirname, '../../playwright/.auth/cookies.json');
        await landingPage.goto()
        await page.context().storageState({ path: authFile });
        await expect(page).toHaveTitle('R&D Solution for Digital Transformation')
        await expect (landingPage.bannerHeading).toBeVisible()
        await contactUsPage.goto()
        await expect(page).toHaveTitle('Contact Us | Dotmatics')
        await expect (contactUsPage.bannerHeading).toBeVisible()
    })
})