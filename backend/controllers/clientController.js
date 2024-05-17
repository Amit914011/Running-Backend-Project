const db = require('../dataBaseConfig.js')


exports.clientSave = (req, res)=>{
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let image=req.file.filename

    let value = [[username, email, password,image]]
    let sql = 'insert into clientData(username, email, password,image) values ?'
    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send('data submit')
        }
    })
}

exports.clientLogin = (req, res)=>{
    let username = req.body.username
    let password = req.body.password
    let sql = 'select * from clientData where username= ? and password = ?'

    db.query(sql, [username, password], (err, result)=>{
        if(err) throw err
        else{
            if(result.length > 0){
                res.send(true)
            }else{
                res.send(false)
            }
        }
    })
}

exports.getClient = (req, res)=>{
    let sql = 'select * from clientData'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteClient = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from clientData where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('data deleted')
        }
    })
}

exports.viewClient = (req,res)=>{
    let id = req.params.id
    let sql = "select * from clientData where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateClient = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update clientData set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('data updated')
        }
    })
}

