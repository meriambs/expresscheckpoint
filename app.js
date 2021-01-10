// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')
const path =require('path')

const app = express() // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

  /*  To use the Turbo 360 CMS, from the terminal run
      $ turbo extend cms
      then uncomment line 21 below: */

  // db: vertex.nedb()
}

 app.use(function (req, res, next) {

   const date = new Date();
const hour = date.getHours();
 const day = date.getDay();
 if(((17 < hour)||(hour < 9))||((5 < day)||(day < 1))) {
 return res.sendFile(path.join(__dirname, './error', 'serverinactif.html'));
 } else {
 return next()
 }

 })



vertex.configureApp(app, config)

const main = require("./routes/main")
 app.use('/', main)






// // import routes
// const index = require('./routes/index')
// const api = require('./routes/api') // sample API Routes

// // set routes
// app.use('/', index)
// app.use('/api', api) // sample API Routes

module.exports = app
