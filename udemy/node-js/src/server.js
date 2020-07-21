const express = require('express')
const port = 4242

const app = express()

app.get('/products', (req, res, next) => {
    res.send( {name:'notebook', price: 1999.99})
})

app.use((req, res, next) => {
    res.send( { msg: 'page not found' } )
})

app.listen(port, (err) => {
    console.log(`server listening on port ${port}`)
})