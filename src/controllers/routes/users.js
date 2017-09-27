const router = require('express').Router()
const { encryptPassword, passport, userId } = require('../../config/authentication.js')
const users = require('../../models/users.js')
const reviews = require('../../models/reviews.js')

router.get('/signup', (req, res) => {
  if(!req.user) {
    res.render('signup', { error: req.flash('error') })
  } else {
    res.redirect(`/users/${req.user.id}`)
  }
})

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/users/signup',
    failureRedirect: '/users/signup',
    failureFlash : true
  })
)

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  users.findById(id)
  .then(user => {
    reviews.findByUserId(id)
    .then(user_reviews => {
      res.render('profile', {user, user_reviews})
    })
    .catch(err => next(err))
  })
  .catch(err => next(err))
})


module.exports = router
