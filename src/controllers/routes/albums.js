const router = require('express').Router()
const albums = require('../../models/albums.js')
const reviews = require('../../models/reviews.js')

router.get('/:albumID', (req, res) => {
  const albumID = req.params.albumID

  albums.getByID(albumID)
  .then(album => {
    reviews.findByAlbumId(albumID)
    .then(album_reviews => {
      console.log('reviews for albums', album_reviews);
      res.render('album', {album, album_reviews})
    })
  })
})

module.exports = router
