const express = require('express');

const app = express();

app.listen(3000);

// app.use(express.static(path.join(__dirname, 'views')));

// routers
app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname});
})
app.get('/about', (req,res) => {
    res.status(301).sendFile('./views/about.html', {root: __dirname});
})

// redirects
app.get('/about-me', (req,res) => {
    res.redirect('/about');
})

// 404
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname});
})