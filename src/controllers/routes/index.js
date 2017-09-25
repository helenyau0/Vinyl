const router = require('express').Router()
const albums = require('./albums.js')
const db = require('../../models/albums.js')

router.get('/', (req, res) => {
  db.getAll((error, albums) => {
    if (error) {
      res.status(500).render('error', {error})
    } else {
      res.render('index', {albums})
    }
  })
})

router.use('/albums', albums)

module.exports = router
