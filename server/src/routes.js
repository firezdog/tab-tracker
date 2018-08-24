const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)
  app.post('/songs', SongsController.create)
  app.get('/songs/:song_id', SongsController.view)
  app.put('/songs/:song_id', SongsController.update)
}
