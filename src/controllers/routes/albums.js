const router = require('express').Router()
const albums = require('../../models/albums.js')
const reviews = require('../../models/reviews.js')
const users = require('../../models/users.js')

router.get('/:albumID', (req, res) => {
  const albumID = req.params.albumID
  albums.getByID(albumID)
  .then(album => {
    reviews.findByAlbumId(albumID)
    .then(album_reviews => {
      for(values of album_reviews) {
        users.findById(values.user_id)
        .then(user => {
          const name = user.name
          res.render('album', {album, album_reviews, name})
        })
      }
    })
  })
})

router.get('/:id/reviews/new', (req, res) => {
  const id = req.params.id
  albums.getByID(id)
  .then(album => {
    res.render('new_review', {album})
  })
})

router.post('/:id/reviews/new', (req, res) => {
  const id = req.params.id
  reviews.create(id, req.body)
  .then(review => {
    res.redirect(`/albums/${id}`)
  })
})

module.exports = router
