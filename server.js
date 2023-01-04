//connect to express
const express = require('express')
const app = express()
//setting location of routers
const homeRoutes = require('./routes/home')
const servicesRoutes = require('./routes/services')
const aboutRoutes = require('./routes/about')
const contactRoutes = require('./routes/contact')
const privacyRoutes = require('./routes/privacy')
//recognizing dotenv file
require('dotenv').config({path: './config/.env'})
//setting ejs as the view format
app.set('view engine', 'ejs')
//setting a folder for easy access
app.use(express.static('public'))
//just doing something
app.use(express.urlencoded({ extended: true }))
//telling which route to use when home page is requested
app.use('/', homeRoutes)
app.use('/', servicesRoutes)
app.use('/', aboutRoutes)
app.use('/', contactRoutes)
app.use('/', privacyRoutes)
//connecting to port
app.listen(process.env.PORT, () => console.log('Server running'))