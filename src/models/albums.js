const dbAlbums = require('./db/albums.js')

module.exports = {
  getAll: dbAlbums.getAll,
  getByID: dbAlbums.getByID
}
