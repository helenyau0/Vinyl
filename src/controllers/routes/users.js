const router = require('express').Router()
const { encryptPassword } = require('../../config/authentication.js')
const users = require('../../models/users.js')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res, next) => {
  const { email, password, confirm } = req.body
  const hash = encryptPassword(password)
  if (password !== confirm) {
    res.render('signup', {error: "Password does not match!"})
  } else {
    users.findByEmail(email)
    .then(user => {
      if(user) {
        res.render('signup', {error: "Email Taken!"})
      } else if(user === null) {
        users.create(req.body, hash)
        res.redirect('/')
      }
    })
    .catch(next)
  }
})


module.exports = router
