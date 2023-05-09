import { Page, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

export default class HomePageSteps {
    constructor(page: Page, homePage: HomePage) {
        this.page= page;
        this.homePage= homePage;
    }

    private page: Page;
    private homePage: HomePage;

    async checkGooogleOfferedText() {
        await expect(this.homePage.getGoogleOfferedText()).toContainText("Google се нуди на");
    }
}