const User = function (data) {
  // this 키워드는 new 키워드로 생성자 함수가 호출되면서 새롭게 생성되는 객체 자기 자신을 가리키게 된다
  this.data = data;
};

// 이제 생성자 함수로 새롭게 생성되는 모든 객체가 이 하나의 동일한 register 함수를 가리키게 된다
User.prototype.register = function () {};

// 익스포트해준다 -> 컨트롤러 파일에 임포트해준다
module.exports = User;
