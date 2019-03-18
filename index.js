const express = require('express')
const app = express()
const http = require('http').Server(app)

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

module.exports = app
