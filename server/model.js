const mongoose = require('mongoose')

//链接mongodb 并使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)

const models = {
    user:{
        'user':{'type':String,require:true},
        'pwd':{type:String,require:true},
        'type':{'type':String,require:true},
        // 头像
        'avatar':{'type':String},
        // 个人简介
        'desc':{'type':String},
        // 职位名
        'title':{'type':String},
        // boss
        'company':{'type':String},
        'money':{'type':String},
    },
    chat:{

    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getName:function(name){
     return  mongoose.model(name)
    }
}