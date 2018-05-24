const router = require('express').Router()
const reviews = require('../../models/reviews.js')

router.post('/delete/:id', (req, res, next) => {
  const id = req.params.id
  reviews.remove(id)
  .then(deleted => {
    res.json({ message: 'Deleted' });
  })
  .catch(err => next(err))
})

router.get('/update/:id', (req, res, next) => {
  const id = req.params.id
  reviews.findById(id)
  .then(review => {
    res.render('update_review', { review })
  })
  .catch(err => next(err))
})

router.post('/update/:id', (req, res, next) => {
  reviews.update(req.params.id, req.body)
  .then(updated => {
    res.redirect(`/users/${updated.user_id}`)
  })
  .catch(err => next(err))
})

module.exports = router
