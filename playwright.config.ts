import { PlaywrightTestConfig } from '@playwright/test'


// const reporters = {
//     html: [ 'html', { open: 'never' } ],
//     line: ['line'],
//     list: ['list'],
//     'allure-playwright': ['allure-playwright'],
//     'playwright-qase-reporter': [
//         'playwright-qase-reporter',
//         {
//             apiToken: env.QASE_API_TOKEN,
//             projectCode: 'CA',
//             runComplete: false,
//             logging: true,
//             uploadAttachments: false
//         }
//     ]
// }

const config: PlaywrightTestConfig = {
    expect: {
        toMatchSnapshot: { threshold: 0.1 }
    },

    // reporter: env.REPORTERS.map(reporter => reporters[reporter]),

    workers: 8,

    // retries: 3,

    // repeatEach: 10,

    use: {
        // baseURL: env.BASE_URL,
        headless: false,
        viewport: { width: 1600, height: 900 },
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },

    projects: [
        {
            name: 'Chromium',
            use: {
                browserName: 'chromium',
                locale: 'en-GB'
            }
        },

        // {
        //     name: 'iPhone13',
        //     use: {
        //         ...devices['iPhone 13'],
        //         locale: 'ru-RU'
        //     }
        // },

        // {
        //     name: 'Pixel4a',
        //     use: {
        //         ...devices['Pixel 4a (5G)'],
        //         locale: 'ru-RU'
        //     }
        // },

        // {
        //     name: 'Firefox',
        //     use: {
        //         browserName: 'firefox',
        //         locale: 'ru-RU'
        //     },
        // },

        // {
        //     name: 'WebKit',
        //     use: {
        //         browserName: 'webkit',
        //         locale: 'ru-RU'
        //     },
        // }
    ]
}

export default config
