const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())

var deliveryRouter = require('./src/routes/delivery');

var corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));
app.use(bodyParser.json())

app.listen(8082,()=>{
    console.log("listening on port 8082")
})

app.use('/delivery', deliveryRouter);