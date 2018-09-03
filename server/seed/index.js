/* jshint ignore:start */
const {
  sequelize,
  Song,
  User
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      }),
      songs.map(song => {
        Song.create(song)
      })
    )
  })
