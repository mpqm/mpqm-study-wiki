const DB =[]

// DB저장 -> 이메일전송 -> 성공메시지호출
function register(user){
    return saveDB(user, function(user){return sendEmail(user, function (user){return getResult(user)})})
}

function saveDB(user, callback){
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user);
}

function sendEmail(user, callback){
    console.log(`email to ${user.email}`);;
    return callback(user)
}

function getResult(user){
    return `succecss register ${user.name}`
}

const result = register({email: "abcd@eamil.com", password: "1234", name: "andy"})
console.log(result);