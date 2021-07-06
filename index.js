'use strict';
 const express = require ('express');
 const mongoose = require('mongoose');
 require('dotenv').config();

 const server = require('./src/server');
 const PORT = process.env.PORT;

  const MONGODB_URI='mongodb+srv://rujeena:QQWWaasszzxx12!@@cluster0.lzdt9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


 // Start up DB Server
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, options);
// Start the web server
server.start(PORT);



