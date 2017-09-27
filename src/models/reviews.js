const dbReviews = require('./db/reviews.js')

module.exports = {
  findByUserId: dbReviews.findByUserId,
  remove: dbReviews.remove,
  findByAlbumId: dbReviews.findByAlbumId,
  create: dbReviews.create
}
