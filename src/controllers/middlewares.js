const authorized = (req, res, next) => {
  if(!req.user) {
    res.redirect('/login')
  } else {
    next()
  }
}

const localVariables = (req, res, next) => {
  res.locals.userSess = req.user
  next()
}

module.exports = {
  localVariables,
  authorized
}
