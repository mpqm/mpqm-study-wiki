const socket = io('ws://localhost:8080')

socket.on('message', text => {
    const el = document.createElement('li')
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text)
}

// const ws = new WebSocket('ws://localhost:4000/ws')

// ws.onmessage = (webSocektMessage) => {
//     console.log(webSocektMessage);
//     console.log(webSocektMessage.data);
// }

// document.body.onmousemove = (evt) => {
//     const messageBody = {
//         x: evt.clientX,
//         y: evt.clientY
//     };
//     ws.send(JSON.stringify(messageBody))
// }