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
      const newUser = await User.create(req.body)
      const user = newUser.toJSON()
      return res.send({user: user, token: jwtSignUser(user)})
    } catch (err) {
      return res.status(400).send({
        error: 'Duplicate email found in database'
      })
    }
  },
  async login (req, res) {
    const {email, password} = req.body
    console.log(email, password)
    try {
      const user = await User.findOne({
        where: {email: email}
      })
      if (!user) {
        return res.status(403).send({
          error: 'Problem with login credentials.'
        })
      }
      const isPassword = await user.comparePassword(password)
      console.log(isPassword)
      if (!isPassword) {
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
