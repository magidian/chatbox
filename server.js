// create server on port 3000
const io = require('socket.io')(3000)

// when website is loaded, this function is called and give each user a socket
io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})