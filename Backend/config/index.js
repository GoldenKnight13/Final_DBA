const mysql = require('mysql')
const database = 'proof'


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database
})

module.exports = {
    db
}