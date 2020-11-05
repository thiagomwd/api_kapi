import {config as configDotenv} from 'dotenv'
import {resolve} from 'path'
switch(process.env.NODE_ENV) {
  case "dev":
    console.log("Environment is 'dev' mode")
    configDotenv({
      path: resolve(__dirname, "../.env.dev")
    })
    break
  case "production":
    configDotenv({
      path: resolve(__dirname, "../.env.prod")
    })
    break
  // Add 'staging' and 'production' cases here as well!
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
}