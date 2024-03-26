const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())

var authRouter = require('./src/routes/auth');

var corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.listen(8081,()=>{
    console.log("listening on port 8081")
})

app.use('/auth', authRouter);