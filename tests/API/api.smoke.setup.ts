import { test, expect } from "@fixtures/pages.fixture";

test.describe('API smoke testing', async () => {
    test.describe.configure({ retries:1 })
    test('GET landingPage', async ({ landingPage, request }) => {
        const response = await request.get(process.env.BASE_URL!, {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET aboutUsPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'about-us', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })

    test('GET aboutCareersPage', async ({ request }) => {
        const response = await request.get(process.env.BASE_URL! + 'about-us', {
        })

        expect(response.status()).toBe(200)
        const body = await response.body()
        expect(body).toBeTruthy()
    })
})