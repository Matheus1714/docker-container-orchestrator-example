const express = require('express')

PORT = 8080
HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Teste')
})

app.listen(PORT, HOST)