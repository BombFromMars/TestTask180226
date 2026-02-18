import { config } from 'dotenv'

config()

const envVarToBoolean = (variable: string) => {
    if (variable.toLowerCase() === 'true') return true
    else if (variable.toLowerCase() === 'false') return false
    else throw `Can't parse boolean value of ${variable}`
}

const { BASE_URL, LOGIN, PASSWORD, HEADLESS } = process.env

const requiredVariables = {
    BASE_URL,
    LOGIN,
    PASSWORD,
    HEADLESS
}

for (const variable in requiredVariables)
    if (requiredVariables[variable] === undefined || requiredVariables[variable] === '')
        throw `Environment variable ${variable} is not set.`



export const env = {
    ...requiredVariables,
    HEADLESS: envVarToBoolean(HEADLESS)
}
