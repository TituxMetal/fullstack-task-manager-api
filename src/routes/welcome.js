const welcomeRoutes = router => {
  router.get('/api/welcome', (_req, res) => {
    res.json({ message: 'Hello from express server' })
  })
}

export default welcomeRoutes
