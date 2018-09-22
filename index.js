const express = require('express')

const app = express()

require('./routes/home')(app)
require('./routes/calendar')(app)

const PORT = process.env.PORT || 5000
console.log(`app listening on port ${PORT}`)
app.listen(PORT)