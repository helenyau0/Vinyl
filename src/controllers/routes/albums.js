const router = require('express').Router()
const albums = require('../../models/albums.js')

router.get('/:albumID', (req, res) => {
  const albumID = req.params.albumID

  albums.getByID(albumID)
  .then(album => {
    // const album = albums[0]
    res.render('album', {album})
  })
})

module.exports = router
