import { test, expect } from "@fixtures/pages.fixture";
import { token } from '@datafactory/invalidToken.json'

test.describe('API testing', async () => {
    test.describe.configure({ retries:1 })
    test.use({ storageState: 'playwright/.auth/cookies.json'})
    test('GET /details with no authorisation token errors', async ({ landingPage, request }) => {
        const response = await request.get('https://epsilon.6sense.com/v3/company/details', {
        })

        expect(response.status()).toBe(401)
        const body = await response.json()
        expect(body).toBeTruthy()
        expect(body.message).toContain('Authorization header missing.')
    })

    test('GET /details with incorrect authorisation errors', async ({ landingPage, request }) => {
        const response = await request.get('https://epsilon.6sense.com/v3/company/details', {
                headers: {
                    Authorization: `Bearer ${ token }`
            },
        })

        expect(response.status()).toBe(401)
        const body = await response.json()
        expect(body).toBeTruthy()
        expect(body.message).toContain('Authorization token is not valid.')
    })
})