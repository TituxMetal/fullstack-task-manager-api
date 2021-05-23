import { connectMongoDb } from '~/database'
import { setCloseOnExit } from '~/utils'

import { createApp } from './app'

const server = createApp()

connectMongoDb()
setCloseOnExit(server)
