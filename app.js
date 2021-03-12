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

app.post('/blogs', (req, res) => {
    const value = req.body.value
    let buff = Buffer.from(value);
    let data = buff.toString('base64');

    db.query('INSERT INTO Blogs (data) VALUES (?)', [data], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
})

app.post('/get-blogs', (req, res) => {
    let arr = []
    db.query("SELECT * FROM Blogs", (err, result) => {
        try{
            console.log(arr)
            for(let i=0; i < result.length; i++){
                let decode = Buffer.from(result[i].data, 'base64').toString('ascii')
                console.log(decode)
                let newArr = [...arr, decode]
                arr = newArr
            }
            console.log(arr)
            res.status(200).json({ data: arr })
        } catch (err) {
            console.log(err)
        }
    })
})

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001')
})
