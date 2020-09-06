const express = require('express')
const cors = require('cors')
const app = express()
const port = 9999
const messages = require('./messages')
const client = require('./client')
const axios = require('axios')
app.use(cors())

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.get('/authorization', async (req, res, next) => {
  const { code, code_verifier } = req.query
  
  const response = await client.post('/token', {
    authorization_code: code,
    code_verifier: code_verifier,
    client_id: 'e769bcfe-eed7-4f1f-afe0-4563fa5d8b17',
    client_secret: 'lxqdxJmSWhSBJjhzglbsiUvJRRoRoXsFNlxAYubriQdHPicTcyLtNLiQcmFEZAngRhVKkmLjoJJmjQIVpeOGUppTkDiDojNdShHMxLlSeesfUVUvUpuYLqQGyzEnIbaoHOjJDTOxIxOzxZFWkaDdHvfqbVpKqugvsHaViGIVZqrUDCscviFyUaXwbSmiuHUkHmmkfrwASjjSPxJQMtOXmqIgAfCTNBDFhDZGmN',
    grant_type: "authorization_code"
  })

  const { data } = response
  client.defaults.headers.authorization = data.access_token
  const userData = await client.get('/meuid/data')

  res.send({ data: userData.data })

})

app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})