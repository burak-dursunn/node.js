const express = require('express');

const app = express();

app.listen(3000);

// app.use(express.static(path.join(__dirname, 'views')));

// routers
app.get('/', (req,res) => {
    res.render('index', { title: 'Home'});
})
app.get('/about', (req,res) => {
    res.status(301).render('about', { title: 'About'});
})

// redirects
app.get('/about-me', (req,res) => {
    res.redirect('/about');
})

// 404
app.use((req,res) => {
    res.status(404).render('404', { title: '404 Not Found'});
})