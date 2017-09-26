const db = require('./db')

const findByUserId = (id) => {
  return db.any('SELECT * FROM reviews WHERE user_id=$1 ORDER BY created_at DESC LIMIT 3;', [id])
}

module.exports = {
  findByUserId
}
