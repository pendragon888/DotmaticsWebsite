import { LandingPage } from "@pages/landing/landing.page";
import { NavigationPage } from "@pages/navigation/navigation.page";
import { ContactUsPage } from "@pages/company/contact-us/contact-us.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
    landingPage: LandingPage;
    navigationPage: NavigationPage;
    contactUsPage: ContactUsPage;
};

export const test = baseTest.extend<MyPages>({
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
    navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
    contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  }

});

export { expect } from "@playwright/test";