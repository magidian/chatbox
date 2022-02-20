// get socket variable using location of 
// where the socket is hosted
const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// whenever the event is received, call the function
socket.on('chat-message', data => {
    console.log(data)
}) 

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    // send the msg from client to the server
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})