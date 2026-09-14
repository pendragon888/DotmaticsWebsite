import { type Locator, type Page } from "playwright"

export class AboutCareersPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly exploreAvailablePositionsLink: Locator

     constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        this.exploreAvailablePositionsLink = page.locator('section').filter({ hasText: 'Your career. Your impact.' }).getByRole('link')
        }

    async goto(){
        await this.page.goto(process.env.BASE_URL! + 'about-careers')
    }
}