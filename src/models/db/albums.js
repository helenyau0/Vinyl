const db = require('./db')

const getAll = () => {
  return db.any('SELECT * FROM albums')
}

const getByID = (albumID) => {
  return db.oneOrNone('SELECT * FROM albums WHERE id = $1', [albumID])
}

module.exports = {
  getAll,
  getByID,
}
