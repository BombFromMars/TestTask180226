import { expect, Locator, Page } from '@playwright/test'
import { env } from '../env'

export class MainPage {
    readonly page: Page
    readonly loginField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly errorBox:Locator
    readonly errorMessage: string

    readonly link = env.BASE_URL
    readonly login = env.LOGIN
    readonly password = env.PASSWORD
    

    constructor(page: Page) {
        this.page = page
        this.loginField = page.locator('[data-cy = "login"]')
        this.passwordField = page.locator('[data-cy = "password"]')
        this.loginButton = page.locator('[data-cy="submit-btn"]')
        this.errorBox = page.locator('[class="v-alert__content"]')
        this.errorMessage = "Неправильный логин или пароль"


    }
    async userLogin(login = this.login, password = this.password) {
        await this.loginField.fill(login)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
    async errorCheck(errorText = this.errorMessage) {
            await expect(this.errorBox).toBeVisible();
            await expect(this.errorBox).toContainText(this.errorMessage);
    }



}
