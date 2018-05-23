const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const dbUsers = require('../models/users')

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    dbUsers.findByEmail(email)
    .then(foundUser => {
      if (bcrypt.compareSync(password, foundUser.password)) {
         return done(null, foundUser)
      } else {
        return done(null, false, {message: "Invalid password, please enter in correct password."})
      }
    }).catch(noUserFound => {
      return done(null, false, {message: "Invalid email, please enter correct email."})
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


passport.use('signup', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  if(password !== req.body.confirm) {
    return done(null, false, { message: "Passwords do not match, try again."})
  } else {
    dbUsers.findByEmail(email)
    .then(user => {
      if(user) {
        return done(null, false, { message: "This email is already taken." })
      } else if(user === null) {
        const hash = encryptPassword(password)
        dbUsers.create(req.body, hash)
        .then(user => {
          return done(null, user)
        })
      }
    })
  }
}))


module.exports =  {
  encryptPassword,
  passport
}
