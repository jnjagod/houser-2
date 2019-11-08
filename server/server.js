require('dotenv').config()
const express = require('express')
const massive = require('massive')
const houseCtrl = require('./controller/houseCtrl')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

app.use(express.json())

app.get('/api/houses', houseCtrl.getHouses)
app.post('/api/houses', houseCtrl.addHouse)
app.delete('/api/houses/:id', houseCtrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} dogs out`))
})