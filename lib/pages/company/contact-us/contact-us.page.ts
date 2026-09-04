import { type Locator, type Page} from "playwright"

export class ContactUsPage {
    readonly page: Page
    readonly bannerHeading: Locator
    readonly bannerBody: Locator

    //Form fields
    readonly FormSection: Locator
    readonly FormEmail: Locator
    readonly FormFirstName: Locator
    readonly FormLastName: Locator
    readonly FormCompanyName: Locator
    readonly FormPhone: Locator
    readonly FormJobTitle: Locator
    readonly FormCountry: Locator
    readonly FormMessage: Locator
    readonly FormSubmit: Locator

    readonly FormEmailValidationError: Locator

    constructor(page:Page) {
        this.page = page
        this.bannerHeading = page.locator('h1')
        this.bannerBody = page.getByRole('main')

        // Form fields
        this.FormSection = page.locator('#formSection')
        this.FormEmail = page.getByRole('textbox', { name: 'Email' })
        this.FormFirstName = page.getByRole('textbox', { name: 'First name' })
        this.FormLastName = page.getByRole('textbox', { name: 'Last name' })
        this.FormCompanyName = page.getByRole('textbox', { name: 'Company name' })
        this.FormPhone = page.getByRole('textbox', { name: 'Phone' })
        this.FormJobTitle = page.getByRole('textbox', { name: 'Job title' })
        this.FormCountry = page.getByLabel('Country')
        this.FormMessage = page.getByRole('textbox', { name: 'Message' })
        this.FormSubmit = page.getByRole('button', { name: 'Submit' })

        this.FormEmailValidationError = page.locator('.form-control-message-error')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL! + 'contact-us')
    }
}