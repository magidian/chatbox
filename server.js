// create server on port 3000
const io = require('socket.io')(3000, {
    cors: {
        origin: "*",
    }
})

// when website is loaded, this function is called and give each user a socket
io.on('connection', socket => {
    socket.on('send-chat-message', message => {
        // console.log(message)
        socket.broadcast.emit('chat-message', message)
    })
})