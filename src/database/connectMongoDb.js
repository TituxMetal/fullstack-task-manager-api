import httpError from 'http-errors'
import mongoose from 'mongoose'

import { inProd, mongoOptions, mongoUri } from '~/config'

const connectMongoDb = async () => {
  try {
    await mongoose.connect(mongoUri, mongoOptions)

    console.info(`
      Database connected!
      ${!inProd && mongoUri}
    `)
  } catch (error) {
    console.error(
      httpError(500, error, { reason: `connectMongoDb: ${error.message}` })
    )
  }
}

export default connectMongoDb
