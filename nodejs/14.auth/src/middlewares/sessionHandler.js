// 세션 핸들러 미들웨어 함수 정의
function sessionHandler(req, res, next) {
  // 세션 객체가 존재하고, req.session.regenerate 메서드가 없으면 새로운 regenerate 메서드 추가, 콜백 함수 호출
  if (req.session && !req.session.regenerate) { req.session.regenerate = (cb) => { cb(); }; }

  // 세션 객체가 존재하고, req.session.save 메서드가 없으면 새로운 save 메서드 추가, 콜백 함수 호출
  if (req.session && !req.session.save) { req.session.save = (cb) => { cb(); }; }
  next(); // 다음 미들웨어로 제어를 넘김
}

module.exports = sessionHandler; 

  