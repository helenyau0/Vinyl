const router = require('express').Router()
const albums = require('../../models/albums.js')
const reviews = require('../../models/reviews.js')
const users = require('../../models/users.js')

router.get('/:albumID', (req, res, next) => {
  const albumID = req.params.albumID
  albums.getByID(albumID)
  .then(album => {
    reviews.findByAlbumId(albumID)
    .then(album_reviews => {
      res.render('album', {album, album_reviews})
    })
    .catch(err => next(err))
  })
  .catch(err => next(err))
})

router.get('/:id/reviews/new', (req, res, next) => {
  const id = req.params.id
  albums.getByID(id)
  .then(album => {
    res.render('new_review', {album})
  })
  .catch(err => next(err))
})

router.post('/:id/reviews/new', (req, res, next) => {
  const id = req.params.id
  reviews.create(id, req.body)
  .then(review => {
    res.redirect(`/albums/${id}`)
  })
  .catch(err => next(err))
})

module.exports = router
