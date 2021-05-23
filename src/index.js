import { port } from '~/config'
import connectDb from '~/database'
import { setCloseOnExit } from '~/utils'

import { createApp } from './app'

const server = createApp()

connectDb()
setCloseOnExit(server)
