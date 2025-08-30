const http = require('http')
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => {

    // Lodash

    const number = _.random(0,100);
    console.log(number);

    const hello = _.once(() => {
        console.log('hello everyone');
    })
     hello();
     hello(); // This is not going to run. 'hello' function only run once because is wrapped with Lodash's 'once' function.

    res.setHeader('Content-Type', 'text/html')

    let path = './Views'
    switch(req.url) {
        case '/':
            path += '/index.html';
            break;
        case '/about':
            path += '/about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');    
            res.end();
        default: 
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err,data) => {
        if(err) {
            console.log(err);
        }
        else {
            res.end(data);
        }
    })
    
})

server.listen('3000', 'localhost', () => {
    console.log('listening for request on port 3000')
})

