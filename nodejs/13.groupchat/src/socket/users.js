const users = []
const addUser = ({id, userName, roomName}) => {
    userName = userName.trim();
    roomName = roomName.trim();
    if(!userName ||!roomName) { return {error: '사용자이름과 방이름이 필요합니다.'}}
    const existingUser = users.find((user) => { user.roomName === roomName && user.userName === userName })
    if(existingUser) { return {error: '이미 사용중인 사용자이름입니다.'} }
    const user = {id, userName, roomName}
    users.push(user)    
    return {user}
}

const getUsersInRoom = (roomName) =>{
    roomName = roomName.trim();
    return users.filter((user) => user.roomName === roomName)
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const removeUser = (id) => {
    const idx = users.findIndex((user) => user.id === id)
    if(idx !== -1) { return users.splice(idx, 1)[0] }
}
module.exports = {
    removeUser,
    getUser,
    getUsersInRoom,
    addUser
}