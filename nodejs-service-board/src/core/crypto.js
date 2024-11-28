const bcrypt = require("bcrypt");

// 비밀번호를 해시화하여 반환하는 함수
async function encryptPassword(password) {
    try {
        const salt = 2; // 솔트(암호화 과정에서 사용되는 임의의 값) 설정
        const hashedPassword = await bcrypt.hash(password, salt); // bcrypt를 사용하여 비밀번호 해시화
        return hashedPassword; // 해시화된 비밀번호 반환
    } catch (error) {
        console.error("Error while encrypting password:", error); 
        throw error;
    }
}

// 비밀번호 일치 여부를 확인하는 함수
async function comparePasswords(plainPassword, hashedPassword) {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword); // bcrypt를 사용하여 비밀번호 일치 여부 확인
        return match; // 비밀번호 일치 여부 반환 (true 또는 false)
    } catch (error) {
        console.error("Error while comparing passwords:", error);
        throw error; 
    }
}

// 모듈 내보내기: 비밀번호 해시화 및 비교 함수를 내보냄
module.exports = {
    encryptPassword, // 비밀번호 해시화 함수
    comparePasswords // 비밀번호 일치 여부 확인 함수
};
