const dbReviews = require('./db/reviews.js')

module.exports = {
  findByUserId: dbReviews.findByUserId
}
