// import express from 'express'
// import mongoose from 'mongoose'
// import Cards from './dbCards.js'
// import Cors from 'cors'


// // App config
// const app=express()
// const port=process.env.POST || 8001
// const connect_url='mongodb+srv://admin:admin@cluster0.uhdcple.mongodb.net/tinderDB?retryWrites=true&w=majority'
// // MiddleWare

// // we are getting and posting our data in Json format
// app.use(express.json())

// // Cors is used to Connect the backend and frontend 
// app.use(Cors())
// // DB Config
// mongoose.connect(connect_url)

// // API EndPoint
// app.get('/',(req,res)=> res.status(200).send('HELLO ROHIT'))

// app.post('/tinder/cards',(req,res)=>{
//     const dbCard=req.body
//     Cards.create(dbCard,(err,data)=>{
//         if(err) res.status(500).send(err)
//         else res.status(201).send(data)
//     })
// })
// app.get('/tinder/cards',(req,res)=>{
//     const dbCard=req.body
//     Cards.find(dbCard,(err,data)=>{
//         if(err) res.status(500).send(err)
//         else res.status(200).send(data)
//     })
// })
// // Listeners

// app.listen(port,()=> console.log(`Listening on LocalHost : ${port}`))



// // mongodb+srv://admin:<password>@cluster0.uhdcple.mongodb.net/?retryWrites=true&w=majority

import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

//App Config
const app = express()
const port = process.env.POST || 8001
const connect_url='mongodb+srv://admin:admin@cluster0.uhdcple.mongodb.net/tinderDB?retryWrites=true&w=majority'
//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connect_url)

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TWD"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if(err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

//Listeners
app.listen(port, () => console.log(`Listening on localhost: ${port}`))