const router = require('express').Router()
const { encryptPassword } = require('../../config/authentication.js')
const Users = require('../../models/users.js')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res, next) => {
  const { email, password, confirm } = req.body
  const hash = encryptPassword(password)
  if (password !== confirm) {
    res.render('signup', {error: "Password does not match, try again!"})
  } else {
    Users.findByEmail(email)
    .then(user => {
      if(user) {
        res.render('signup', {error: "This email is already taken"})
      } else if(user === null) {
        Users.create(req.body, hash)
        res.redirect('/')
      }
    })
    .catch(next)
  }
})


module.exports = router
