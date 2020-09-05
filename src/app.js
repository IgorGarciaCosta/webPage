const fs = require('path')
const express = require('express')
const hbs = require('hbs')
const { request } = require('http')

const app = express()
const port = process.env.PORT || 3000 //port provided by heroku or 3000 if dont exists


//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
    //Setup handleBars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
    //Setup static directory to serve
app.use(express.static(publicDirectoryPath))


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


// app.com/help
const helpPageRoute = path.join(__dirname, '../public/help')
app.use(express.static(helpPageRoute))

//app.com/about
const aboutPageRoute = path.join(__dirname, '../public/about')
app.use(express.static(aboutPageRoute))


//render index page
//req:request object
//res: reponse object
app.get('', (req, res) => {
    //render one of handlebars templates
    res.render('index', {
        title: 'Testing Page',
        name: 'Igor Garcia'
    })

})

//render about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Igor Garcia'
    })
})


//render help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Igor Garcia'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMessage: 'Page not found.',
        name: 'Igor Garcia'
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})