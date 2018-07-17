const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

router.post('/getWarning',async (ctx)=>{
    if(ctx.request.body.errMsg){
        const bugs = mongoose.model('collection')
        let newBugs = new bugs(ctx.request.body)
        console.log(newBugs)
        await newBugs.save().then(()=>{
            ctx.body={
                code:200,
                message:'success'
            }
        }).catch(error=>{
            ctx.body={
                code:500,
                message:error
            }
        })
    }else{
        ctx.body={
            code:500,
            message:'无参数'
        }
    }

})

module.exports = router