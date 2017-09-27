const router = require('express').Router()
const reviews = require('../../models/reviews.js')

router.post('/delete/:id', (req, res, next) => {
  const id = req.params.id
  reviews.remove(id)
  .then(deleted => {
    res.redirect(`/users/${deleted.user_id}`)
  })
  .catch(err => next(err))
})

module.exports = router
