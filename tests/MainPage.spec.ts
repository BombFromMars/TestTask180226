import { test, expect } from '@playwright/test'
import { MainPage } from '../pages/MainPage'


test.describe('Test task', () => {
    test.skip(({ browserName }) => browserName !== 'chromium');
        test.beforeEach(async ({ page }, testInfo) => {
        const mainPage = new MainPage(page)
        testInfo.setTimeout(120000)
        await page.goto(mainPage.link)
        await page.waitForLoadState()
    })

    test(('Login test positive @login'), async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.userLogin()
        await page.context().storageState({ path: 'test_files/loginCookies.json' })
    })
    test(('Login test negative both fields @login'), async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.loginField.fill('test')
        await mainPage.passwordField.fill('test')
        await mainPage.loginButton.click()
        await mainPage.errorCheck()
    })

    test(('Login test negative password field @login'), async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.loginField.fill(mainPage.login)
        await mainPage.passwordField.fill('test')
        await mainPage.loginButton.click()
        await mainPage.errorCheck()
})

    test(('Login test negative login field @login'), async ({ page }) => {
        const mainPage = new MainPage(page)
        await mainPage.loginField.fill('test')
        await mainPage.passwordField.fill(mainPage.password)
        await mainPage.loginButton.click()
        await mainPage.errorCheck()
    })


})
