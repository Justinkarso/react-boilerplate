const express = require('express')
const path = require('path');
const app = express()
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
})