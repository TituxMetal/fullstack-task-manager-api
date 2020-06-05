const shutdownServer = app => {
  app.close(err => {
    if (err) {
      console.error(err)
      process.exitCode = 1
    }

    process.exit()
  })
}

export default shutdownServer
