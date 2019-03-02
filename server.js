const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 5000

let app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('home.hbs')
})

app.get('/about', (req, res) => {
    res.render('about.hbs')
})
app.listen(port, ()=> console.log(`App is running on port ${port}`))