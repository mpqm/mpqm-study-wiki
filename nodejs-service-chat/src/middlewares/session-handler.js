// 세션 객체에 필요한 메서드를 추가하는 미들웨어, 세션 객체의 regenerate와 save 메서드가 없는 경우에만 이를 추가
function sessionHandler(req, res, next) {
  if (req.session && !req.session.regenerate) { req.session.regenerate = (cb) => { cb(); }; }
  if (req.session && !req.session.save) { req.session.save = (cb) => { cb(); }; }
  next();
}

module.exports = sessionHandler; 
