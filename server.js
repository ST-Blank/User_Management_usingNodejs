const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const bodyparser=require('body-parser')
const path = require('path')
const getfiles=require('./server/routes/router')
const connectDB=require('./server/database/connection')

const app=express()
//dotenv 
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||5000

app.use(express.static('./views'))
//morgan to provide execution info in log
app.use(morgan('tiny'))
//mongoose connect
connectDB();
//body-parser to parse the request
app.use(bodyparser.urlencoded({extended:true}))

//set view engine ejs
app.set("view engine","ejs")
//load assets
//app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
//app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
//app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
//load css js img
app.use(express.static(path.resolve(__dirname, 'public')));

//load router
app.use('/',getfiles)


app.listen(PORT,()=>{
    console.log(`listening on server ${PORT}`);
})