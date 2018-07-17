const mongoose = require('mongoose')
const db = "mongodb://han:123456@111.230.90.30:27017/koa2"
const glob = require('glob')//通配符
const {resolve} = require('path')//相对路径转换绝对路径

exports.initSchemas = () =>{
    glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}
mongoose.Promise =  global.Promise

exports.connect = ()=>{
    //连接数据库
    mongoose.connect(db)
    //最大重连数
    let maxConnectTimes = 0
    return new Promise((resolve,reject)=>{
        //增加数据库连接的事件监听
        mongoose.connection.on('disconnected',()=>{
            //进行重连
            if(maxConnectTimes <= 3){
                maxConnectTimes++
                mongoose.connect(db)
            }else{
                reject()
                throw new Error('DataBase Error')
            }
        })

        //数据库出现错误的时候
        mongoose.connection.on('error',err=>{
           //进行重连
           if(maxConnectTimes <= 3){
                console.log(err)
                maxConnectTimes++
                mongoose.connect(db)
            }else{
                reject(err)
                throw new Error('DataBase Error')
            }
        })

        //链接打开的时候
        mongoose.connection.once('open',()=>{
            console.log('MongoDB Connected successfully!')
            resolve()
        })

    })
}