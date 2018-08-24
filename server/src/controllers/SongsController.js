const {Song} = require('../models')

module.exports = {
  
  async index (req, res) {
    try {
      const songs = await Song.findAll({limit: 10})
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'There was an error fetching song data.'
      })
    }
  },

  async create (req, res) {
    try { 
      const song = await Song.create(req.body)
      res.send({song})
    } catch (err) {
      res.status(500).send({
        error: 'There was an error posting song data.'
      })
    }
  },

  async view (req, res) {
    try {
      const song = await Song.findOne({where: {id: req.params.song_id}})
      if (!song) {
        res.status(404).send({
          error: 'Song does not exist in the database.'
        })
      } else {
        res.send(song)
      }
    } catch (err) {
      res.status(500).send({
        error: 'There was an error fetching song data.'
      })
    }
  },

  async update (req, res) {
    try {
      await Song.update(req.body, {where: {id: req.params.song_id}})
      res.send({song: req.body})
    } catch (err) {
      res.status(500).send({
        error: 'There was an error posting song data.'
      })
    }
  }

}
