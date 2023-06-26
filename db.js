/* const mongoose = require('mongoose')
const config =require('./config')
function connectDB(){
    mongoose.connect(config.db.url).then(()=>{
        console.log("Database connected")
    })
}
module.exports = connectDB  */

const mongoose = require("mongoose")

function connectDB() {
  mongoose.connect('mongodb+srv://easyFood:vCR0mqSgzAzRI00D@easyfood.e2onkf6.mongodb.net/easyfood').then(()=>{console.log("conectado")}) 
   
}
module.exports =connectDB 
