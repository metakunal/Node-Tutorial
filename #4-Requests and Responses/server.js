const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request has been  made")

    //Sending back the response
    //Step-1: Set Header Content Type
    res.setHeader('Content-Type', 'text/html');

    //Step-2: Routing 
    let path = __dirname + '/views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //Redirecting(optional): used when we have moved some page
        //Here we need to send the status code as 301
        //And then seHeader as two parameters('Location','redirect-page path')    
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    //Step-3: Send an HTML file

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
        }

        //Step-4: Ending our response
        res.end();
    })
})

server.listen(3000, 'localhost', () => {
    console.log("Listening for requests on PORT-3000")
})

//Notice that these things are not loged into browsers console, because we are runing the code on our server and not on the browser.