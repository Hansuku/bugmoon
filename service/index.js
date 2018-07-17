const Koa = require('koa')
const app = new Koa()
const { connect , initSchemas } = require('./database/init.js')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const Router = require('koa-router')

app.use(bodyParser())
app.use(cors())

let user = require('./API/user.js')

let router = new Router()
router.use('/user',user.routes())

//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;(async () =>{
    await connect()//连接
    initSchemas()//骨架注册
})()

app.use(async(ctx)=>{
    ctx.body = '<h1>Die API</h1>'
})

app.listen(3000,()=>{
    console.log('[server] start at port 3000')
})