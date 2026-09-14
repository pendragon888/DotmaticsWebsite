import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/jobApplicationData.json'

test.describe("Visit Jobs page for Dotmatics", ()=>{
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test.beforeEach(async ({ jobsPage }) => {
        await jobsPage.goto()
    })

    test('Validate Jobs page is present', async ({ jobsPage }) => {
        await expect(jobsPage.bannerBody).toContainText('Join Our Team to Make an Impact!')
    })

    test('Filter for role, click to apply and fill out form', async ({ jobsPage, page }) => {
        //Filter for role
        await expect(jobsPage.filterSearch).toBeVisible()
        await (jobsPage.filterSearch).fill('Software Development Engineer in Test')

        //Apply to role
        await expect(page.getByText('Software Development Engineer')).toBeVisible()
        await expect(jobsPage.applyLink.first()).toBeVisible()
        await jobsPage.applyLink.first().click()

        //Fill out application
        await expect(jobsPage.applicationHeading).toBeVisible()

        await expect (jobsPage.formFirstName).toBeVisible()
        await jobsPage.formFirstName.click();
        await jobsPage.formFirstName.fill(formData.firstName);

        await expect (jobsPage.formLastName).toBeVisible()
        await jobsPage.formLastName.click();
        await jobsPage.formLastName.fill(formData.lastName);

        await expect (jobsPage.formEmail).toBeVisible()
        await jobsPage.formEmail.click();
        await jobsPage.formEmail.fill(formData.email);

        await expect (page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('group', { name: 'Phone' }).getByLabel('Toggle flyout')).toBeVisible()
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('group', { name: 'Phone' }).getByLabel('Toggle flyout').click();
        await jobsPage.formPhoneCountry.fill(formData.phoneCountry);
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('option', { name: 'United Kingdom +' }).click();

        await expect (jobsPage.formPhone).toBeVisible()
        await jobsPage.formPhone.click();
        await jobsPage.formPhone.fill(formData.phone);

        await expect (jobsPage.formLocation).toBeVisible()
        await jobsPage.formLocation.click();
        await jobsPage.formLocationCombobox.fill(formData.location);
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().locator('#react-select-candidate-location-option-0').click();

        await expect (jobsPage.formMission).toBeVisible()
        await jobsPage.formMission.click();
        await jobsPage.formMission.fill(formData.missionQuestion);

        await expect (jobsPage.formAboutUs).toBeVisible()
        await jobsPage.formAboutUs.click();
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('option', { name: 'Job board, careers website,' }).click();

        await expect (jobsPage.formTestQuestion).toBeVisible()
        await jobsPage.formTestQuestion.click();
        await jobsPage.formTestQuestion.fill(formData.describeTestQuestion);

        await expect (jobsPage.formAuthorisedToWork).toBeVisible()
        await jobsPage.formAuthorisedToWork.click();
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('option', { name: `${formData.authorisedToWork}` }).click();

        await expect (jobsPage.formAuthorisationSupport).toBeVisible()
        await jobsPage.formAuthorisationSupport.click();
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('option', { name: `${formData.supportAuthorsation}` }).click();

        await expect (jobsPage.formCurrentEmployee).toBeVisible()
        await jobsPage.formCurrentEmployee.click();
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('option', { name: `${formData.currentEmployee}` }).click();

        await expect (jobsPage.formCountry).toBeVisible()
        await jobsPage.formCountry.click();
        await page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('option', { name: `${formData.country}` }).click();

        await expect (jobsPage.formLinkedInProfile).toBeVisible()
        await jobsPage.formLinkedInProfile.click();
        await jobsPage.formLinkedInProfile.fill(formData.linkedIn);

        await expect (jobsPage.formWebsitePortfolio).toBeVisible()
        await jobsPage.formWebsitePortfolio.click();
        await jobsPage.formWebsitePortfolio.fill(formData.websitePortfolio);

        // Do not submit due to production environment
    })
})