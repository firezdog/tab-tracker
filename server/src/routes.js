const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.get('/songs', SongsController.index)
  app.post('/songs', SongsController.create)
  app.get('/songs/:song_id', SongsController.view)
  app.put('/songs/:song_id', SongsController.update)
  app.get('/bookmarks', BookmarksController.index)
  app.post('/bookmarks', BookmarksController.create)
  app.delete('/bookmarks', BookmarksController.destroy)
  app.get('/user/:user_id/bookmarks', BookmarksController.favorites)
}
