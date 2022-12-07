const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();


const cors = require('cors')
app.use(cors());

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/users', userRoutes )

mongoose.connect(
    'mongodb+srv://'+process.env.USER_ID+':'+process.env.USER_KEY+'@realmapp.nm4n0el.mongodb.net/'+process.env.MONGO_DATABASE+'?retryWrites=true&w=majority'
    )
    .then(() => {})
    .catch((error) => {
        console.log(error)
    })

app.listen(process.env.PORT, () => {
    console.log ('Server running!')
})