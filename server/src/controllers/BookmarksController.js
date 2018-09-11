/* jshint ignore:start */
const {Bookmark, User, Song} = require('../models')

module.exports = {

  // purpose: determine whether a given user has bookmarked a given song.
  async index (req, res) {
    const {songId, userId} = req.query
    try {
      const bookmark = await Bookmark.findOne({where: {$and: {SongId: songId, UserId: userId}}})
      if (bookmark) {
        res.json({result: bookmark})
      } else {
        res.json({result: false})
      }
    } catch (err) {
      res.status(500).json({error: 'An error occurred.'})
    }
  },

  async create (req, res) {
    try {
      const {userId, songId} = req.body
      const bookmark = await Bookmark.create({})
      const user = await User.findOne({where: {id: userId}})
      const song = await Song.findOne({where: {id: songId}})
      bookmark.setSong(song)
      bookmark.setUser(user)
      res.send({bookmark: true})
    } catch (error) {
      console.log(error)
      res.status(500).send({error})
    }
  },

  async destroy (req, res) {
    try {
      const {userId, songId} = req.body
      console.log(userId, songId)
      const bookmark = await Bookmark.findOne({where: {songId, userId}})
      await bookmark.destroy()
      res.send({message: 'Success'})
    } catch (error) {
      res.status(500).send({error: 'There was an error.'})
    }
  }

}
