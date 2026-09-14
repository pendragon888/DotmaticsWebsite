import { type Locator, type Page } from "playwright"

export class JobsPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly bannerBody: Locator

    //Job filters
    readonly filterSearch: Locator

    readonly applyLink: Locator

    //Application form
    readonly applicationHeading: Locator
    readonly applicationContainer: Locator
    readonly formFirstName: Locator
    readonly formLastName: Locator
    readonly formEmail: Locator
    readonly formPhoneCountry: Locator
    readonly formPhone: Locator
    readonly formLocation: Locator
    readonly formLocationCombobox: Locator
    readonly formResumeCVAttachButton: Locator
    readonly formCoverLetterAttachButton: Locator
    readonly formMission: Locator
    readonly formAboutUs: Locator
    readonly formTestQuestion: Locator
    readonly formAuthorisedToWork: Locator
    readonly formAuthorisationSupport: Locator
    readonly formCurrentEmployee: Locator
    readonly formCountry: Locator
    readonly formLinkedInProfile: Locator
    readonly formWebsitePortfolio: Locator

     constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        //this.navToLanding = page.getByRole('link', { name: '' })
        this.bannerBody = page.locator('h1')

        //Job filters
        this.filterSearch = page.getByRole('textbox', { name: 'Search' })

        //Apply link
        this.applyLink = page.getByRole('link', { name: 'Apply now'})

        //Application form
        this.applicationHeading = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('heading', { name: 'Apply for this job' })
        this.applicationContainer = page.locator('.application--container')

        this.formFirstName = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'First Name' })
        this.formLastName = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'Last Name' })
        this.formEmail = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'Email' })
        this.formPhoneCountry = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('group', { name: 'Phone' }).getByLabel('Country*')
        this.formPhone = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'Phone' })
        this.formLocation = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().locator('.field-wrapper > .select > .select__container > .select-shell > div > .select__control > .select__value-container > .select__input-container').first()
        this.formLocationCombobox = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('combobox', { name: 'Location (City)' })
        this.formResumeCVAttachButton = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByLabel('Resume/CV*').locator('button').filter({ hasText: 'Attach' })
        this.formCoverLetterAttachButton = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByLabel('Cover Letter').locator('button').filter({ hasText: 'Attach' })
        this.formMission = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'What about the mission of' })
        this.formAboutUs = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('button', { name: 'Toggle flyout' }).nth(1)
        this.formTestQuestion = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'Briefly describe a test you' })
        this.formAuthorisedToWork = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('button', { name: 'Toggle flyout' }).nth(2)
        this.formAuthorisationSupport = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('button', { name: 'Toggle flyout' }).nth(3)
        this.formCurrentEmployee = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('button', { name: 'Toggle flyout' }).nth(4)
        this.formCountry = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('button', { name: 'Toggle flyout' }).nth(5)
        this.formLinkedInProfile = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'LinkedIn Profile' })
        this.formWebsitePortfolio = page.locator('iframe[title="Greenhouse Job Board"]').contentFrame().getByRole('textbox', { name: 'Website/Portfolio' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL! + 'jobs')
    }
}