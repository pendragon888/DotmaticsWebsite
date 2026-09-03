import { type Locator, type Page} from "playwright"

export class LandingPage {
    readonly page: Page
    readonly bannerHeading: Locator
    readonly bannerBody: Locator

    constructor(page:Page) {
        this.page = page
        this.bannerHeading = page.locator('h1')
        this.bannerBody = page.getByRole('main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}