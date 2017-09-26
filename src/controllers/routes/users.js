const router = require('express').Router()
const { encryptPassword, passport } = require('../../config/authentication.js')
const Users = require('../../models/users.js')

router.get('/signup', (req, res) => {
  res.render('signup', { error: req.flash('error') })
})

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/users/signup',
    failureFlash : true
  })
)


module.exports = router
