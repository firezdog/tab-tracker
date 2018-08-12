const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// create a sequelize instance that uses the right "connection string".
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// Read each file in the 'models' directory except this one and make it accessible from db object.
fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

// make both instance and class accessible from db object.
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
