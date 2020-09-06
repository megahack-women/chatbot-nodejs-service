const express = require('express')
const cors = require('cors')
const app = express()
const port = 9999
const messages = require('./messages')
const client = require('./client')
const atob = require('atob')

app.use(cors())

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.get('/meuid-authorization/authorize/:id', (req, res, next) => {
  const { id } = req.params
  const { code, code_verifier, parameters } = req.query
  console.log({ code, code_verifier, parameters, id })
  res.send("tste")
  next()
})

app.get('/authorization', async (req, res, next) => {
  const { code, code_verifier, parameters } = req.query
  
  const { origin, session} = atob(parameters)
  try {
    const response = await client.post('/token', {
      authorization_code: code,
      code_verifier: code_verifier,
      client_id: 'e769bcfe-eed7-4f1f-afe0-4563fa5d8b17',
      parameters,
      client_secret: 'lxqdxJmSWhSBJjhzglbsiUvJRRoRoXsFNlxAYubriQdHPicTcyLtNLiQcmFEZAngRhVKkmLjoJJmjQIVpeOGUppTkDiDojNdShHMxLlSeesfUVUvUpuYLqQGyzEnIbaoHOjJDTOxIxOzxZFWkaDdHvfqbVpKqugvsHaViGIVZqrUDCscviFyUaXwbSmiuHUkHmmkfrwASjjSPxJQMtOXmqIgAfCTNBDFhDZGmN',
      grant_type: "authorization_code"
    })
  } catch (err) {
    res.status(401).send(err)
  }

  const { data } = response
  client.defaults.headers.authorization = data.access_token
  const userData = await client.get('/meuid/data')

  res.send(userData.data)

})

app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})