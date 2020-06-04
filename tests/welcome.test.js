const request = require('supertest')

const server = require('../src/app')

describe('Welcome route', () => {
  describe('GET /api/welcome', () => {
    it('should return the welcome message', async (done) => {
      const { body } = await request(server)
        .get('/api/welcome')
        .expect(200)

      expect(body.message).toBe('Hello from express server')

      done()
    })
  })
})
