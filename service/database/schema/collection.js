const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const bugSchema = new Schema({
    errMsg : String,
    event : String,
    url : String,
    userAgent : String,
    createAt:{type:Date, default:Date.now()},
},{
  collection:'bug_report'  
})

mongoose.model('collection',bugSchema)
