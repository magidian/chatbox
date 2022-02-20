// create server on port 3000
const io = require('socket.io')(3000, {
    cors: {
        origin: "*",
    }
})

const users = {}

// when website is loaded, this function is called and give each user a socket
io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        // console.log(message)
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})