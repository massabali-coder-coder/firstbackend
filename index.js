require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const Database = {
  name : "massab",
  class:"11",
  databse :"pass"
}
app.get('/', (req, res) => {
  res.send('Hel ')
})

app.get('/url',(req,res)=>{
  res.json(Database)
})  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
