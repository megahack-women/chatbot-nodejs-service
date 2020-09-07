const express = require('express')
const cors = require('cors')
const app = express()
const port = 9999
const messages = require('./messages')
const client = require('./client')

app.use(cors())

app.get('/message/:id', (req, res) => {
  const { id } = req.params
  res.send(messages.responses.find(response => response.id === id))
})

app.get('/authorization', async (req, res, next) => {
  const { code, code_verifier, parameters } = req.query
  
  try {
    const response = await client.post('/token', {
      authorization_code: code,
      code_verifier: code_verifier,
      client_id: 'e769bcfe-eed7-4f1f-afe0-4563fa5d8b17',
      parameters,
      client_secret: 'lxqdxJmSWhSBJjhzglbsiUvJRRoRoXsFNlxAYubriQdHPicTcyLtNLiQcmFEZAngRhVKkmLjoJJmjQIVpeOGUppTkDiDojNdShHMxLlSeesfUVUvUpuYLqQGyzEnIbaoHOjJDTOxIxOzxZFWkaDdHvfqbVpKqugvsHaViGIVZqrUDCscviFyUaXwbSmiuHUkHmmkfrwASjjSPxJQMtOXmqIgAfCTNBDFhDZGmN',
      grant_type: "authorization_code"
    })

    const { data } = response
    client.defaults.headers.authorization = data.access_token
    const userData = await client.get('/meuid/data')
  
    res.send(userData.data)
  } catch (err) {
    res.status(401).send(err)
  }

})

app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})