const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const itemsRouter = require('./routes/api/items')
const app = express()


app.use(bodyParser.json())

const db = require('./config/keys').mongoURL

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.use('/api/items', itemsRouter)

  
    


app.listen(process.env.PORT || 5000, () => console.log(`Server runs on port ${process.env.PORT}`))