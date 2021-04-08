const express = require('express')
const path = require('path');
const app = express()
require("dotenv").config();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB
});


app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001')
})
