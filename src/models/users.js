const dbUsers = require('./db/users.js')

module.exports = {
  create: dbUsers.create,
  findByEmail: dbUsers.findByEmail,
  findById: dbUsers.findById
}
