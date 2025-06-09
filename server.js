const express = require('express')
const app = express()
const db = require('./db')
const Person = require('./models/person.js')
const bodyparser = require('body-parser');
const personRoutes=require('./routes/personroutes.js')
const MenuRoutes=require('./routes/menuroutes.js')


app.use(bodyparser.json());
app.use('/person',personRoutes);
app.use('/menu',MenuRoutes)

app.get('/', function (req, res) {
    res.send('Hello World ! Welcome to my server ')
})

app.get('/about', function (req, res) {
    var customized_user =
    {
        name: "Ayush",
        age: 21,
        description: "This is aytush",
    }
    res.send(customized_user)
})

app.get('/404', (req, res) => {
    res.send('404 Page Not Found !')
})

app.listen(3000, () => {
    console.log('Server is listing on port 3000')
}) 