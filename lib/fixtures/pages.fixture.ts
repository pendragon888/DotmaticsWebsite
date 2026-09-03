import { LandingPage } from "@pages/landing/landing.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
    landingPage: LandingPage;
};

export const test = baseTest.extend<MyPages>({
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  }
});

export { expect } from "@playwright/test";