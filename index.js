const express = require('express')
const cors = require('cors')
const app = express()
const port = 9999
const messages = require('./messages')
const client = require('./client')
app.use(cors())

app.get('/:id', (req, res) => {
  console.log(req.params)
  const { id } = req.params
  res.send(messages.responses.find(response => response.id === id))
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.get('/authorization', async (req, res, next) => {
  const { code, code_verifier } = req.query
  console.log(req.query)
  const response = await client.post('/token', {
    authorization_code: code,
    code_verifier: code_verifier,
    client_id: 'e769bcfe-eed7-4f1f-afe0-4563fa5d8b17',
    client_secret: 'lxqdxJmSWhSBJjhzglbsiUvJRRoRoXsFNlxAYubriQdHPicTcyLtNLiQcmFEZAngRhVKkmLjoJJmjQIVpeOGUppTkDiDojNdShHMxLlSeesfUVUvUpuYLqQGyzEnIbaoHOjJDTOxIxOzxZFWkaDdHvfqbVpKqugvsHaViGIVZqrUDCscviFyUaXwbSmiuHUkHmmkfrwASjjSPxJQMtOXmqIgAfCTNBDFhDZGmN',
    grant_type: "authorization_code"
  })
  console.log(response)
  res.send(response)
})

app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})