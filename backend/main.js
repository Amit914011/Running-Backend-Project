const express = require('express')
const cors = require('cors')
const db = require('./dataBaseConfig.js')
const productRoute = require('./routes/productRoute.js')
const adminRoute = require('./routes/adminRoute.js')

let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))


db.connect((err)=>{
    if(err) throw err
    else{
        console.log("database connected")
    }
})


let productTableQuery = `
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    productBrand VARCHAR(255) NULL,
    productType VARCHAR(255) NULL,
    productPrice VARCHAR(255) NULL,
    productRating VARCHAR(255) NULL,
    PRIMARY KEY (id));
`

db.query(productTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("product table created successfull")
    }
})


app.use('/api', productRoute)

app.use('/api', adminRoute)


app.listen(3000, ()=>{
    console.log('server is runing')
})
