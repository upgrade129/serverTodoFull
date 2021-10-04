const express = require('express')
const todoRoutes = require('./routes/todoRoutes')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const DBURL = "mongodb+srv://prem:full1234@cluster0.cojqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(cors())
app.use(express.urlencoded({ extended : true}));
app.use(express.json())

mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => app.listen(3500, ()=>{
        console.log("app is running on the port 3500");
    }))
    .catch(err => console.log(err))

app.use('/todos', todoRoutes);

app.get('/', (req,res)=> {
    res.send("hello world")
})

