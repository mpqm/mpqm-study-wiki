const socket = io()
const query = new URLSearchParams(location.search)
const userName = query.get('username');
const roomName = query.get('roomname');

socket.emit('join', {userName, roomName}, (error) => {
    if(error) { 
        alert(error)
        location.href = '/';
    }
})

const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML;
socket.on('roomData', ({roomName, users}) => {
    const html = Mustache.render(sidebarTemplate, {roomName, users})
    document.querySelector('#sidebar').innerHTML = html
})

const messages = document.querySelector('#messages')
const messageTemplate = document.querySelector('#message-template').innerHTML;
socket.on('message', (message) => {
    
    const html = Mustache.render(messageTemplate, {
        userName: message.userName,
        message: message.text,
        createdAt: moment(message.createdAt).format('hh:mm a')
    });
    messages.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
})
function scrollToBottom() { messages.scrollTop = messages.scrollHeight; }

const formMessage = document.querySelector('#form-message')
const formMessageInput = document.querySelector('#form-message-input')
const formMessageButton = document.querySelector('#form-message-button')
formMessage.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessageButton.setAttribute('disabled', 'disabled')
    const message = e.target.elements.message.value;
    socket.emit('sendMessage', message, (error) => {
        formMessageButton.removeAttribute('disabled')
        formMessageInput.value = '';
        formMessageInput.focus();
        if(error) { return console.log(error); }
    })
})