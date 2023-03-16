// user에 관련된 함수들이다
// 모듈을 다른 파일에서 이용할 수 있도록 exports 해준다
// exports.프로퍼티명 = 함수 로 정의해주면 된다.

// 유저가 제출한 데이터를 생성할 블루프린트인 생성자 함수 User를 임포트해준다(경로 설정 주의)
const User = require('../models/User');

// login 함수
exports.login = function () {};

// logout 함수
exports.logout = function () {};

// register 함수
exports.register = function (req, res) {
  // models 에서 정의한 생성자 함수를 new키워드를 이용하여 req.body에 접근해서 유저가 FORM 에서 제출한 객체 데이터를 바탕으로 생성해준다. argument로 통과 시켜주는 것은 유저가 제출한 req.body
  const user = new User(req.body);
  user.register();
  res.send('회원가입을 축하드립니다');
  console.log(user);
};

// home 함수 : 대시보드에 접근했을 때 렌더링 된다
exports.home = function (req, res) {
  res.render('home-guest');
};
