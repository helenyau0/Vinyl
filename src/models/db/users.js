const db = require('./db')

const create = (user, hash) => {
  return db.one('INSERT INTO users (name, email, password, image) VALUES($1, $2, $3, $4) RETURNING *', [user.name, user.email, hash, '/images/default_photo.png'])
}

const findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM users WHERE email=$1', [email])
}

const findById = (id) => {
  return db.oneOrNone('SELECT * FROM users WHERE id=$1', [id])
}

module.exports = {
  create,
  findByEmail,
  findById
}
