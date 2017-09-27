const router = require('express').Router()
const { passport } = require('../../config/authentication')

router.get('/login', (req, res) => {
  if(req.user) {
    res.redirect(`/users/${req.user.id}`)
  } else {
    res.render('login', {error: req.flash('error')})
  }
})

router.post('/login',
  passport.authenticate('login', {
    successRedirect: '/login',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
