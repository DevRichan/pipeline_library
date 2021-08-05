const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
// const contentRoute = require('')

const app = express();
const port = 3000;

app.use(bodyParser.json());
// app.use(contentRoute);

app.get('/hello',(req,res) => {
    console.log('im ready')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});