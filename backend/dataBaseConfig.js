const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Amit@321',
    database:'commerce'
})


module.exports = connection