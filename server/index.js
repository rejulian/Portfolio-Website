const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password : 'admin',
    database : 'portfolio_db'
})

app.get('/', (req,res) => {
    db.query('SELECT * FROM project', (err, result)=>{
        if (err) {
            console.error(err)
        } else{
            res.send(result)
        }
    })
})

app.listen(4000,()=>{
    console.log('Server running on port 4000...');
})