const express = require ('express');
require('dotenv').config({path:"./config/.env"})

const connectDB = require('./config/connectDB')
connectDB()
const app = express();

app.use (express.json())

app.use('/api/user', require('./Routes/user'))     // http://localhost:6000/api/user
app.use('/api/auth', require('./Routes/adminRoute')) // http://localhost:6000/api/auth




const port = process.env.PORT

app.listen(port, (err)=>
err? console.log(err): console.log (`server is running on port ${port}`)
)