import { LandingPage } from "@pages/landing/landing.page";
import { NavigationPage } from "@pages/navigation/navigation.page";
import { AboutCareersPage } from "@pages/company/about-careers/about-careers.page";
import { JobsPage } from "@pages/company/about-careers/jobs.page";
import { ContactUsPage } from "@pages/company/contact-us/contact-us.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
    landingPage: LandingPage;
    navigationPage: NavigationPage;
    aboutCareersPage: AboutCareersPage;
    jobsPage: JobsPage;
    contactUsPage: ContactUsPage;
};

export const test = baseTest.extend<MyPages>({
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
    navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
    aboutCareersPage: async ({ page }, use) => {
    await use(new AboutCareersPage(page));
  },
    jobsPage: async ({ page }, use) => {
    await use(new JobsPage(page));
  },
    contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  }

});

export { expect } from "@playwright/test";