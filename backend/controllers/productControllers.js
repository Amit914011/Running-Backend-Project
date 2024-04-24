const db = require('../dataBaseConfig.js')


exports.productSave = (req, res)=>{
    let productBrand = req.body.productBrand
    let productType = req.body.productType
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating

    let value = [[productBrand, productType, productPrice, productRating]]
    let sql = 'insert into product(productBrand, productType, productPrice, productRating) values ?'
    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send('data submit')
        }
    })
}

exports.getProduct = (req, res)=>{
    let sql = 'select * from product'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}