import { test, expect } from '@playwright/test'
import { MainPage } from '../pages/MainPage'
import { LoginPage } from '../pages/LoginPage'

test.describe('Test task main', () => {
    test.skip(({ browserName }) => browserName !== 'chromium');
    // test.use({ storageState: 'test_files/loginCookies.json' })
        test.beforeEach(async ({ page }, testInfo) => {
        const mainPage = new MainPage(page)
        testInfo.setTimeout(120000)
        await page.goto(mainPage.link)
        await page.waitForLoadState()
    })

    test(('Adding District positive @modal'), async ({ page }) => {
        const mainPage = new MainPage(page)
        const loginPage = new LoginPage(page)
        let nameOfDistrict = "Тестовое задание"+ (Math.floor(Math.random() * 100)).toString()
        await loginPage.userLogin()
        await mainPage.adressFond.click()
        await mainPage.adresses.click()
        await mainPage.addAdress.click()
        await mainPage.districtButton.click()

        await mainPage.shouldBeDistrictsModal()
        await mainPage.districtName.fill(await nameOfDistrict)
        await mainPage.addParams.click()

        let name = await mainPage.paramName.nth(1).innerText()
        await mainPage.shouldBeParamModal()
        await mainPage.paramName.nth(1).click() //Так как в рамках тестового задания нет необходимости проверять конкретный параметр, беру первый из списка
        await mainPage.paramValue1.type(Math.floor(Math.random() * 100).toString())
        await mainPage.paramValue2.type(Math.floor(Math.random() * 100).toString())
        await mainPage.paramValue3.type(Math.floor(Math.random() * 100).toString())
        await mainPage.paramComment.fill(mainPage.loremIpsum)
        await mainPage.paramAccept.click()

        await expect(await mainPage.addedParamName.last()).toHaveText(name)
        await page.waitForTimeout(500) //Ожидание необходимо из-за анимации исчезновения модального окна. Запрос элементов начинается до того, как исчезнет прошлое окно
        await mainPage.accept.click()
        await expect(await mainPage.addedDistrictName.last()).toHaveText(nameOfDistrict)

    })
 


})
