const db = require('./db')

const findByUserId = (id) => {
  return db.any('SELECT * FROM reviews WHERE user_id=$1 ORDER BY created_at DESC;', [id])
}

const findByAlbumId = (id) => {
  return db.any('SELECT * FROM reviews WHERE album_id=$1 ORDER BY created_at DESC;', [id])
}

const getAll = () => {
  return db.any('SELECT * FROM reviews ORDER BY created_at DESC LIMIT 3')
}

const remove = (id) => {
  return db.one('DELETE FROM reviews WHERE id=$1 RETURNING *', [id])
}

const create = (id, body) => {
  return db.one(`INSERT INTO reviews (title, body, user_id, album_id) VALUES ($1, $2, $3, $4) RETURNING *`, [body.title, body.review, body.userID, id])
}

module.exports = {
  findByUserId,
  remove,
  findByAlbumId,
  create,
  getAll
}
