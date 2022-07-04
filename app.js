const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const port = process.env.PORT || 3000

//IMPORT ROUTES
const todosRoutes = require('./routes/todos');

//MIDDLEWARE
app.use(express.json())
app.use('/todos',todosRoutes);

//ROUTES
app.get('/',(req,res)=>{
    res.send('WE ARE AT HOME')
})

//CONNECTING TO THE DB HERE
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>console.log(`CONNECTED TO THE DATABASE USING PORT ${port}`)
)
//LISTENIGN TO OUR SERVER
app.listen(port);