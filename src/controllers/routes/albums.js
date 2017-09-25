const router = require('express').Router()
const albums = require('../../models/db/albums.js')

router.get('/:albumID', (req, res) => {
  const albumID = req.params.albumID

  albums.getByID(albumID, (error, albums) => {
    if (error) {
      res.status(500).render('error', {error})
    } else {
      const album = albums[0]
      res.render('album', {album})
    }
  })
})

module.exports = router
