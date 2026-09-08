import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Dotmatics and view navigation", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('Validate Landing page present', async ({ landingPage, navigationPage }) => {
        await landingPage.goto()
        await expect (landingPage.bannerHeading).toBeVisible()
        await navigationPage.navToPlatform.click()
        await expect (navigationPage.navToAdaptiveWorkflows).toBeVisible()
        await navigationPage.navToSolutions.click()
        await expect (navigationPage.navToAntibodyAndProteinEngineering).toBeVisible()
        await navigationPage.navToProducts.click()
        await expect (navigationPage.navToSnapGene).toBeVisible()
        await navigationPage.navToResources.click()
        await expect (navigationPage.navToResources).toBeVisible()
        await navigationPage.navToCompany.click()
        await expect (navigationPage.navToCareers).toBeVisible()
        await expect(navigationPage.navToRequestDemo).toBeVisible()
   })
})