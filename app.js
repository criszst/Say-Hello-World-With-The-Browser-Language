const express = require('express')
const app = express()

const port = 3000
const route = __dirname + '/views/404.html'

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/noScript.html', function(req, res) {
    res.sendFile(__dirname + '/views/noScript.html');
})


app.get('/languages.json', function(req, res) {
    res.sendFile(route);
})

app.get('/main.js', function(req, res) {
    res.sendFile(route);
})

app.get('/copy.js', function(req, res) {
    res.sendFile(route);
})

app.use(function(req, res, next) {
    res.status(404).sendFile(route);
});

app.listen(port, () => {
    console.log(`Porta: http://localhost:${port}`)
})