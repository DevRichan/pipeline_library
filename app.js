const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const contentRoute = require('./routes/content-routes')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(contentRoute);

// app.use(contentRoute);

app.get('/hello',(req,res) => {
    console.log('im ready')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});