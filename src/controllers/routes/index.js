const router = require('express').Router()
const albums = require('./albums.js')
const auth = require('./authentication')
const users = require('./users.js')
const db = require('../../models/albums.js')

router.get('/', (req, res) => {
  db.getAll()
  .then(albums => {
    res.render('index', {albums})
  })
  .catch(err => next(err))
})

router.use('/albums', albums)
router.use('/users', users)
router.use('/', auth)

module.exports = router
