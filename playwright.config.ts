import { PlaywrightTestConfig } from '@playwright/test';
import * as envURLs from './environments.json';

const env = {
    dev: envURLs.dev,
    prod: envURLs.prod
}

export const config: PlaywrightTestConfig = {
    expect: {
        timeout: 5000
    },

    forbidOnly: !!process.env.CI,

    reporter: [['junit', { outputFile: 'reports/results-junit.xml' }], ['html', {outputFolder: 'reports/html/'}]],

    use: {
        baseURL: env[process.env.ENV],
        screenshot: 'on',
        acceptDownloads: true,
        trace: 'on',
        headless: false,
        browserName: 'chromium'
    },

    grep: [new RegExp(process.env.TAGS)],
    retries: 1
};

export default config;