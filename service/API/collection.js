const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()


router.post('/getWarning',async (ctx)=>{
    if(ctx.request.body.errMsg){
        const bugs = mongoose.model('collection')
        ctx.request.body.ip = ctx.request.ip
        let newBugs = new bugs(ctx.request.body)
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

router.get('/WarningInfo',async(ctx)=>{
    const bugs = mongoose.model('collection')
    await bugs.find().sort({'createAt': -1}).then(async(result)=>{
        if(result){
            ctx.body={code:200,message:result}
        }else{
            ctx.body={code:500,message:'no result'}
        }
    })
})

module.exports = router