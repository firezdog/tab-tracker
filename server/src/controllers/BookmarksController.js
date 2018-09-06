/* jshint ignore:start */
const {Bookmark} = require('../models')

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
  }

}
