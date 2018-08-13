const {User} = require('../models')

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
        console.log('user not found')
        return res.status(403).send({
          error: 'Problem with login credentials.'
        })
      }
      if (user.password !== password) {
        return res.status(403).send({
          error: 'Problem with login credentials.'
        })
      }
      return res.status(200).send(user.toJSON)
    } catch (err) {
      return res.status(500).send({
        error: 'An error has occurred.'
      })
    }
  }
}
