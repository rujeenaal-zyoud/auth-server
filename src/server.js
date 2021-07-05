 
 'use strict';

 const express = require ('express');
 const cors = require ('cors');
 const morgan = require('morgan');




// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRouter = require('./auth/routes');



// Prepare the express app
const server = express();


 //Middleware imported

 server.use(cors());
 server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended :true}));

//for using auth route 

server.use(authRouter);


server.use('*',notFound);
server.use(errorHandler);

module.exports={
    server :server,
    start:(PORT) =>{
        server.listen(PORT,()=>{
            console.log(`Server Up on ${PORT}`);

        })
    }

}