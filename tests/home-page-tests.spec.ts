import { expect, test } from "@playwright/test";
import HomePage from "../services/pages/home.page";
import HomePageSteps from "../services/steps/homepage.steps";

test.describe('Basic tests', () => {
    let homePage: HomePage;
    let homePageSteps: HomePageSteps;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        homePageSteps = new HomePageSteps(page, homePage);

        await page.goto("", {
            waitUntil: "networkidle"
        });
    });

    test('Check google offered text @regression', async ({}) => {
        await homePageSteps.checkGooogleOfferedText();
    });
});