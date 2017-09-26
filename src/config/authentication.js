const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const dbUsers = require('../models/users')

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    dbUsers.findByEmail(email)
    .then(foundUser => {
      if (bcrypt.compareSync(password, foundUser.password)) {
         return done(null, foundUser)
      } else {
        return done(null, false, {message: "Invalid password, please enter in correct password"})
      }
    }).catch(noUserFound => {
      return done(null, false, {message: "Invalid email, please enter in correct email"})
    })
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  dbUsers.findById(id)
  .then(user => done(null, user))
})

module.exports =  {
  encryptPassword,
  passport
}
