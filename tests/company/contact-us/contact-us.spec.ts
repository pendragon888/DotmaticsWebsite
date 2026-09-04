import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/contactUsData.json'

test.describe("Visit Contact Us page for Dotmatics", ()=>{
    test.beforeEach(async ({ contactUsPage }) => {
        await contactUsPage.goto()
    })

    test('Validate Get in touch page is present', async ({ contactUsPage }) => {
        await expect(contactUsPage.bannerHeading).toContainText('Contact')
        await expect(contactUsPage.bannerBody).toContainText('Connect with us to discuss your software needs, submit media inquiries, request support, and more.')
    })

    test('Check form validation messages are shown', async ({ contactUsPage }) => {
        await contactUsPage.FormFirstName.clear()
        await contactUsPage.FormSubmit.click()
        await expect (contactUsPage.FormEmailValidationError.first()).toBeVisible()
        await expect (contactUsPage.FormEmailValidationError.first()).toContainText('Please enter your email.')
    })

    test('Fill out form', async ({ contactUsPage }) => {
        await expect (contactUsPage.FormSection).toBeVisible()
        await contactUsPage.FormEmail.fill(formData.email)
        await contactUsPage.FormFirstName.fill(formData.firstName)
        await contactUsPage.FormLastName.fill(formData.lastName)
        await contactUsPage.FormCompanyName.fill(formData.companyName)
        await contactUsPage.FormPhone.fill(formData.phone)
        await contactUsPage.FormJobTitle.fill(formData.jobTitle)
        await contactUsPage.FormCountry.selectOption(formData.country)
        await contactUsPage.FormMessage.fill(formData.message)
        // Do not submit due to production environment
    })
})