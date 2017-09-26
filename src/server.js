const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const middleware = require('./controllers/middlewares')
const session = require('cookie-session')
const { passport } = require('./config/authentication')
const routes = require('./controllers/routes')
const flash = require('connect-flash')

const port = process.env.PORT || 3000

const app = express()

require('dotenv').load()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(session({secret: process.env.SECRET}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(middleware.localVariables)

app.use('/', routes)

app.use((error, req, res) => {
  res.status(500).render('error', {error})
})

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
