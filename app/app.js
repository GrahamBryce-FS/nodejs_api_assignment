const express = require("express");
const router = require("../router/router");
const app = express();

// use middleware
app.use(express.json());

// to check if your service is up and running
app.get("/health",(req,res,next) =>{
    res.status(200).json({ message: 'Service is up' });
});

// use middleware for our router
app.use('/breeds', router);
//  error handler
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

//add json response for errors and bad urls
app.use((error, req,res,next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status
        },
    });
});

module.exports = app;