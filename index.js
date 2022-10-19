const express = require('express')
const session = require('express-session')

const app = express();

app.use(session({
  secret: 'my-cookie-secret',
  resave: false,
  saveUninitialized: true,
  proxy: true,
  cookie: {
    domain: 'localhost',
    maxAge: 365 * 24 * 60 * 60 * 1000 // 1 year
  }
}))

app.post('/login/local', (req, res) => {
  res.sendStatus(200);
})

app.listen(8000, () => console.log('Listening on port 8000'))
