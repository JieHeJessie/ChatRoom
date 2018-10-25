const express = require('express')
const utils = require('utility')
const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd':0,'__v':0}

Router.post('/login', function(req,res){
    const {user,psw} = req.body
    User.findOne({user,psw:md5Pwd(psw)},_filter, function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'User or Password incorrect'})
        }
        res.cookie('userid', doc._id)
        return res.json({code:0, data:doc})
    })
})
Router.post('/register', function(req,res){
    const {user, psw, type} = req.body
    User.findOne({user}, function(err,doc){
        if(doc){
            return res.json({code:1, msg:'Already have this user'})
        }

        const userModel = new User({user,type,psw:md5Pwd(psw)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code:1,msg:'Server Error'})
            }

            const {user,type,_id} = d
            res.cookie('userid', _id)
            return res.json({code:0,data:{user, type, _id}})
        })
    })

})

// see all user details on the server side
Router.get('/list', function(req, res){
    //User.remove({},function(e,d){})
    User.find({}, function(err,doc){
        return res.json(doc)
    })
})

//Auth component
Router.get('/info', function(req, res){
    //check if cookie has user details
    const {userid} = req.cookies

    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter, function(err,doc){
        if(err){
            return res.json({code:1, msg:'Server Error'})
        }
        if(doc){
            return res.json({code:0, data:doc})
        }
    })
})

//using md5 to protect user's password
function md5Pwd(psw){
    const salt = 'qwerty1234567~!@#$%^&*hrejwioeffj'
    return utils.md5(utils.md5(psw+salt))
}
module.exports = Router