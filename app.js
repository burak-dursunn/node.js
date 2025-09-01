const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

// app.use(express.static(path.join(__dirname, 'views')));


// routers
app.get('/', (req,res) => {
    const blogs = [
    {title: 'Blog1', snippet: 'lorem ipsum dolor sit amet'},
    {title: 'Blog2', snippet: 'consectetur adipiscing elit'},
    {title: 'Blog3', snippet: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
];
    res.render('index', { title: 'home', blogs});
})

app.get('/about', (req,res) => {
    res.status(301).render('about', { title: 'about'});
})

// redirects
app.get('/about-me', (req,res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req,res) => {
    res.render('create', { title: 'Create Blog'});
})

// 404
app.use((req,res) => {
    res.status(404).render('404', { title: '404 Not Found'});
})