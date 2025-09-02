const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded({ extended: true })); // to get the values from the form

app.set('view engine', 'ejs');

app.listen(3000);
// app.use(express.static(path.join(__dirname, 'views')));

// middleware & static files
app.use(express.static('public')); // anything inside the public folder is going to be accessible as a static file to the frontend

app.use(morgan('dev')); // argument that we can pass as a parameter the morgan are: combined, tiny, common, short

const blogs = [
{title: 'Blog1', snippet: 'lorem ipsum dolor sit amet'},
{title: 'Blog2', snippet: 'consectetur adipiscing elit'},
{title: 'Blog3', snippet: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
];
// routers

app.use((req,res,next) => {
    console.log('Request was made');
    next(); // pass control to the next middleware
})

app.get('/', (req,res) => {
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
    res.render('create', { title: 'Create new Blog'})
})

app.post('/blogs/create', (req,res) => {
    const { title, snippet} = req.body;
    blogs.push({ title: title, snippet: snippet});
    res.redirect('/');
})


// 404
app.use((req,res) => {
    res.status(404).render('404', { title: '404 Not Found'});
})