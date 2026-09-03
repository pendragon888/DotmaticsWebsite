import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Dotmatics", ()=>{
    test('Validate Landing page present', async ({ landingPage }) => {
        await landingPage.goto()
        await expect (landingPage.bannerHeading).toBeVisible()
        await expect (landingPage.bannerHeading).toContainText('Agentic AI for science withthe right foundation')
        await expect (landingPage.bannerBody).toBeVisible()
        await expect (landingPage.bannerBody).toContainText("Most AI gives you answers. Luma Agent delivers the result. Describe what you need, whether it\'s analyzing data, generating reports, or configuring the platform itself. Luma Agent plans, executes, and completes the work. Every step logged. Every action is yours to approve.")
   })
})