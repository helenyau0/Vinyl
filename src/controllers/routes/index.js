const router = require('express').Router()
const albums = require('./albums.js')
const auth = require('./authentication')
const users = require('./users.js')
const reviews = require('./reviews.js')
const dbAlbums = require('../../models/db/albums.js')
const dbReviews = require('../../models/db/reviews.js')

router.get('/', (req, res, next) => {
  dbAlbums.getAll()
  .then(albums => {
    dbReviews.getRecent()
    .then(reviews => {
      res.render('index', {albums, reviews})
    })
  })
  .catch(err => next(err))
})

router.use('/albums', albums)
router.use('/users', users)
router.use('/reviews', reviews)
router.use('/', auth)

module.exports = router
