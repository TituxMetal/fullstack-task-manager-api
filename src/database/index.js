import mongoose from 'mongoose'

import { inProd, mongoOptions, mongoUri } from '~/config'

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, mongoOptions)

    console.info(`
      Database connected!
      ${!inProd && mongoUri}
    `)
  } catch (error) {
    console.error(error)
  }
}

export default connectDb
