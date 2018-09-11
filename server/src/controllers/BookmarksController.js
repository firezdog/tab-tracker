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
      const payload = req.body
      const bookmark = await Bookmark.create({})
      const user = await User.findOne({where: {id: payload.userId}})
      const song = await Song.findOne({where: {id: payload.songId}})
      bookmark.setSong(song)
      bookmark.setUser(user)
      res.send({bookmark: true})
    } catch (error) {
      console.log(error)
      res.status(500).send({error})
    }
  }

}
