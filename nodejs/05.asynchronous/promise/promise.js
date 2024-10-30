const DB = []
function saveDB(user) {
    const oldDBSize = DB.length + 1;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize) { resolve(user) }
        else { reject(new Error("Save DB Error!")) }
    })
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);;
    return new Promise((resolve, recject) => {
        resolve(user)
    })
}

function getResult(user) {
    return new Promise((reslove, recject) => {
        reslove(`succecss register ${user.name}`)
    })
}

function registerByPromise(user) {
    const result = saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch(error => new Error(error))
        .finally(() => console.log("완료")) // 자원회수관련 코드를 넣어두면 편리함
    console.log(result)
    return result;
}
const MyUser = { email: "abcd@eamil.com", password: "1234", name: "andy" }
// allResult = Promise.all([saveDB(MyUser), sendEmail(MyUser), getResult(MyUser)])
// allResult.then(console.log)
const result = registerByPromise(MyUser)
result.then(console.log)