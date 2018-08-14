// using destructuring to declare multiple models as needed?
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  const options = {expiresIn: ONE_WEEK}
  const token = jwt.sign(user, config.authentication.jwtSecret, options)
  return token
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      return res.send(user.toJSON())
    } catch (err) {
      return res.status(400).send({
        error: 'Maybe: duplicate email found in database'
      })
    }
  },
  async login (req, res) {
    const {email, password} = req.body
    try {
      const user = await User.findOne({
        where: {email: email}
      })
      if (!user) {
        return res.status(403).send({
          error: 'Problem with login credentials.'
        })
      }
      if (user.password !== password) {
        return res.status(403).send({
          error: 'Problem with login credentials.'
        })
      }
      const userJson = user.toJSON()
      const token = jwtSignUser(userJson)
      return res.send({user: userJson, token: token})
    } catch (err) {
      return res.status(500).send({
        error: 'An error has occurred.'
      })
    }
  }
}
