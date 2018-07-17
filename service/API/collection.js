const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()

router.post('/getWarnig',async (ctx)=>{
    const bugs = mongoose.model('collection')
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

})

module.exports = router