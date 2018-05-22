const db = require('./db')

const findByUserId = (id) => {
  return db.any('SELECT * FROM reviews WHERE user_id =$1 ORDER BY created_at DESC;', [id])
}

const findById = (id) => {
  return db.oneOrNone('SELECT * FROM reviews WHERE id =$1', [id])
}

const findByAlbumId = (id) => {
  return db.any('SELECT reviews.id, reviews.title, reviews.body, users.name, reviews.user_id, reviews.created_at FROM reviews JOIN users ON users.id= user_id WHERE album_id=$1 ORDER BY reviews.created_at DESC;', [id])
}

const getRecent = () => {
  return db.any('SELECT albums.title, reviews.body, users.name, reviews.created_at, reviews.user_id, reviews.album_id FROM reviews JOIN users ON users.id= user_id JOIN albums ON albums.id = album_id ORDER BY reviews.created_at DESC LIMIT 3;')
}

const remove = (id) => {
  return db.one('DELETE FROM reviews WHERE id=$1 RETURNING *', [id])
}

const create = (id, body) => {
  return db.one(`INSERT INTO reviews (title, body, user_id, album_id) VALUES ($1, $2, $3, $4) RETURNING *`, [body.title, body.review, body.userID, id])
}

const update = (id, body) => {  
  return db.one(`UPDATE reviews SET title=$1, body=$2 WHERE id=$3 RETURNING *`,[body.title, body.review, id])
}

module.exports = {
  findByUserId,
  remove,
  findByAlbumId,
  create,
  getRecent,
  update,
  findById
}
