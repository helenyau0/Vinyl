const router = require('express').Router()
const albums = require('./albums.js')
const auth = require('./authentication')
const users = require('./users.js')
const reviews = require('./reviews.js')
const dbAlbums = require('../../models/db/albums.js')
const dbReviews = require('../../models/db/reviews.js')

router.get('/', (req, res) => {
  dbAlbums.getAll()
  .then(albums => {
    dbReviews.getAll()
    .then(allReviews => {
      let reviews = allReviews.map(review => {
        let albumTitle = albums.find(album => {
          return album.id == review.album_id
        }).title
        return Object.assign({}, {'albumTitle': albumTitle}, review)
      })
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
