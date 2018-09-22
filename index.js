const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000
console.log(`app listening on port ${PORT}`)
app.listen(PORT)