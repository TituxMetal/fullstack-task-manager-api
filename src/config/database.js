const {
  MONGODB_DATABASE = 'db',
  MONGODB_HOST = 'localhost',
  MONGODB_PASSWORD = 'secret',
  MONGODB_PORT = 27017,
  MONGODB_USERNAME = 'admin'
} = process.env

export const mongoOptions = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const secureConnection = `${MONGODB_USERNAME && MONGODB_USERNAME}${
  MONGODB_PASSWORD && `:${MONGODB_PASSWORD}@`
}`

export const mongoUri = `mongodb://${secureConnection}${MONGODB_HOST}:${
  parseInt(MONGODB_PORT, 10)
}/${MONGODB_DATABASE}`
