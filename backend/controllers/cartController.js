const db=require('../dataBaseConfig.js')

exports.cartSave = (req, res)=>{
    let productBrand = req.body.productBrand
    let productType = req.body.productType
    let productPrice = req.body.productPrice
    let productRating = req.body.productRating
    let image=req.body.image

    let value = [[productBrand, productType, productPrice, productRating,image]]
    let sql = 'insert into cart(productBrand, productType, productPrice, productRating,image) values ?'
    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send('data submit')
        }
    })
}

exports.getCart = (req, res)=>{
    let sql = 'select * from cart'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}