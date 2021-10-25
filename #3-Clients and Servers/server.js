const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request has been  made")
})

server.listen(3000, 'localhost', () => {
    console.log("Listening for requests on PORT-3000")
})

//Notice that these things are not loged into browsers console, because we are runing the code on our server and not on the browser.