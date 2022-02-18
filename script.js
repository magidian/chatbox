// get socket variable using location of 
// where the socket is hosted
const socket = io('http://localhost:3000')

// whenever the event is received, call the function
socket.on('chat-message', data => {
    console.log(data)
})