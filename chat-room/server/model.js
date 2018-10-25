const mongoose = require('mongoose')

// connect  mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat';
mongoose.connect(DB_URL)

const models = {
    user:{
        'user':{type:String, 'require':true},
        'psw' :{type:String, 'require':true},
        'type':{'type':String, 'require':true},
        'avatar':{'type':String},
        'desc':{'type':String},
        'title':{'type':String},

        'company':{'type':String},
        'money':{'type':String}
    },
    chat:{}
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}


mongoose.connection.on('connected', function(){
	console.log('mongo connect success')
})

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}
