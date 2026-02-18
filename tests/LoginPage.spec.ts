import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'

test.describe('Test task login', () => {
    test.skip(({ browserName }) => browserName !== 'chromium');
        test.beforeEach(async ({ page }, testInfo) => {
        const loginPage = new LoginPage(page)
        testInfo.setTimeout(120000)
        await page.goto(loginPage.link)
        await page.waitForLoadState()
    })

    test(('Login test positive @login @cookies'), async ({ page }) => {
        const loginPage = new LoginPage(page)
        const mainPage = new MainPage(page)
        await loginPage.userLogin()
        await mainPage.adressFond.click()
        await page.context().storageState({ path: 'test_files/loginCookies.json' })
    })
    test(('Login test negative both fields @login'), async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.loginField.fill('test')
        await loginPage.passwordField.fill('test')
        await loginPage.loginButton.click()
        await loginPage.errorCheck()
    })

    test(('Login test negative password field @login'), async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.loginField.fill(loginPage.login)
        await loginPage.passwordField.fill('test')
        await loginPage.loginButton.click()
        await loginPage.errorCheck()
})

    test(('Login test negative login field @login'), async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.loginField.fill('test')
        await loginPage.passwordField.fill(loginPage.password)
        await loginPage.loginButton.click()
        await loginPage.errorCheck()
    })


})
