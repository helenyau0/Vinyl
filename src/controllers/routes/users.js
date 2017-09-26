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

router.get('/:id', (req, res) => {
  const id = req.params.id
  users.findById(id)
  .then(user => {
    reviews.findByUserId(id)
    .then(user_reviews => {
      console.log('reviews', user_reviews);
      res.render('profile', {user, user_reviews})
    })
  })
})


module.exports = router
