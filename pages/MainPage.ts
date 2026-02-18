import { expect, Locator, Page } from '@playwright/test'
import { env } from '../env'

export class MainPage {
    readonly page: Page
    readonly link: string
    readonly adressFond: Locator
    readonly adresses: Locator
    readonly addAdress: Locator
    readonly districtButton: Locator
    readonly districtName: Locator
    readonly numberInList: Locator
    readonly modalWindow: Locator
    readonly addParams: Locator
    readonly cancel: Locator
    readonly paramName: Locator
    readonly paramValue1: Locator
    readonly paramValue2: Locator
    readonly paramValue3: Locator
    readonly paramComment: Locator
    readonly loremIpsum: string
    readonly paramModal: Locator
    readonly paramAccept: Locator
    readonly addedParamName: Locator
    readonly accept: Locator
    readonly addedDistrictName: Locator
    readonly elementsDistrict: Locator[]
    readonly elementsParam: Locator[]
    readonly editAddress: Locator
    readonly secondParamValue1: Locator
    readonly checkBox: Locator
    readonly delete: Locator
    readonly yes: Locator


    constructor(page: Page) {
        this.page = page
        this.link = env.BASE_URL + 'accounts/acc_menu'
        this.adressFond = page.locator('[data-test-id="Адресный фонд"]')
        this.adresses = page.locator('[data-test-id="Адреса проживающих"]')
        this.addAdress = page.locator('[data-cy="btn-add"]')
        this.districtButton = page.locator('[data-cy="stack-menu-list-item"]').nth(0) //Решение приводит к неустойчивости теста, при возможности переписать или запросить test-id
        this.districtName = page.locator('[data-test-id="Название района"]')
        this.numberInList = page.locator('[data-test-id="Номер в списке"]')
        this.modalWindow = page.locator('[data-test-id="ЛицевыеСчета"]')
        this.addParams = this.modalWindow.locator('[data-cy="btn-add"]')
        this.cancel = page.locator('[data-cy="btn-cancel"]')
        this.paramName = page.locator('[data-field="наименование"]') 
        this.paramValue1 = page.locator('[data-test-id="Значение"]')
        this.paramValue2 = page.locator('[data-test-id="Знач2"]')
        this.paramValue3 = page.locator('[data-test-id="Знач3"]')
        this.paramComment = page.locator('[data-test-id="Примечание"]')
        this.loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus."
        this.paramModal = page.locator('[data-test-id="ЛицевыеСчета.Параметры"]')
        this.accept = page.locator('[data-cy="btn-save"]')
        this.paramAccept = this.paramModal.locator('[data-cy="btn-save"]')
        this.addedParamName = this.modalWindow.locator('[data-field="виды-параметры>наименование"]')
        this.addedDistrictName = page.locator('[data-field="название"]')
        this.editAddress = page.locator('[data-cy="btn-edit"]')
        this.secondParamValue1 = page.locator('[data-test-id="Прописанных"]') //Заметил зависимость test-id и названия инпута, но не могу сходу придумать вариант автоматического подтягивания
        this.checkBox = page.locator('[data-cy="checkbox"]')
        this.delete = page.locator('[data-cy="btn-delete"]')
        this.yes = page.locator('[data-cy="btn-yes"]')

        this.elementsDistrict = [
            this.districtName,
            this.numberInList,
            this.modalWindow,
            this.addParams
        ]
        this.elementsParam = [
            this.paramAccept,
            this.paramComment,
            this.paramModal,
            this.paramName,
            this.paramValue1,
            this.paramValue2,
            this.paramValue3,
            this.paramComment
        ]

    }
    async shouldBeDistrictsModal() {
        for (const elem of this.elementsDistrict) 
            await expect(elem).toBeVisible()
    }
    async shouldBeParamModal() {
        for (const elem of this.elementsParam) await expect(elem).toBeVisible()
    }

}
