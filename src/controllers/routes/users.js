const router = require('express').Router()
const { encryptPassword, passport, userId } = require('../../config/authentication.js')
const Users = require('../../models/users.js')

router.get('/signup', (req, res) => {
  if(!req.user) {
    res.render('signup', { error: req.flash('error') })
  } else {
    res.redirect(`/users/${req.user.id}`)
  }
})

router.post('/signup', passport.authenticate('signup', {
    successRedirect: `/users/signup`,
    failureRedirect: '/users/signup',
    failureFlash : true
  })
)

router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('id', id);
  res.render('profile')
})


module.exports = router
