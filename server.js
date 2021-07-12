const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express(); 
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password:  'password',  
    database: 'site2', 

}); 

app.use(cors()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.json()); 

app.get('/table1', (req, res) => {
    const sqlSelect = 
    "SELECT * FROM table1"; 
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });                                 
}); 

app.get('/', (req, res) => {
    res.send('updated1')                            
}); 



app.listen(3001, () => {
    console.log(`Serving is running at 3001`);
}); 
