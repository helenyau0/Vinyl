const { client } = require('./db')

client.connect()

const create = (user, hash, cb) => {
  _query('INSERT INTO users (name, email, password, image) VALUES($1, $2, $3, $4) RETURNING *', [user.name, user.email, hash, '/images/user_profile_felame.jpg'], cb)
}

const findByEmail = (email, cb) => {
  _query('SELECT * FROM users WHERE email = $1', [email], cb)
}

const  _query = (sql, variables, cb) => {
  client.query(sql, variables, (error, result) => {
    if (error) {
      console.error(error)
      cb(error)
    } else {
      cb(error, result.rows)
    }
  })
}

module.exports = {
  create,
  findByEmail
}
