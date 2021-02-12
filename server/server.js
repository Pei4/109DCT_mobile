const handler = require('serve-handler');
const http = require('http');
const server = http.createServer((request, response) => {
    return handler(request, response, {public: "public"});
});
const io = require('socket.io')(server);