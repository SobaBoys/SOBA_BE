const validator = require('validator');

const User = function (data) {
  this.data = data;
  this.errors = [];
};

/* cleanUP 상속 (유효성 검사 전 미리 정돈) validation 함수가 불필요하게 체크하는 것을 방지 */
User.prototype.cleanUp = function () {
  // typeof 함수는 해당 값의 타입을 반환한다
  // 만약 문자열이 아니라면
  if (typeof this.data.username !== 'string') {
    // 유효성 검사 이전에 문자열이 아닌 값을 미리 공백으로 대체해서 무시해준다
    this.data.username = '';
  }
  if (typeof this.data.email !== 'string') {
    this.data.email = '';
  }
  if (typeof this.data.password !== 'string') {
    this.data.password = '';
  }

  // 만약 위의 조건을 모두 통과한 문자열이라면 (data 속성을 덮어씌워서 다른 속성은 제거해버린다)
  this.data = {
    // 동시에 불필요한 공백을 트림하고 소문자로 바꿔준다
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
  };
};

/* validate 상속 */
User.prototype.validate = function () {
  // 만약 유저 이름이 공백이라면
  if (this.data.username === '') {
    this.errors.push('사용자이름을 입력하세요');
  }
  // 만약 문자 혹은 숫자가 아닐 경우에
  if (this.data.username !== '' && !validator.isAlphanumeric(this.data.username)) {
    // 에러 메세지를 푸시한다
    this.errors.push('사용자이름은 문자나 숫자만 입력가능합니다');
  }
  // 만약 validator.isEmail 가 false를 리턴할 경우
  if (!validator.isEmail(this.data.email)) {
    this.errors.push('이메일 형식이 올바른지 확인해주세요');
  }
  // 패스워드 공백일 경우
  if (this.data.password === '') {
    this.errors.push('비밀번호를 입력하세요');
  }

  // 최소 패스워드 길이
  if (this.data.password.length > 0 && this.data.password.length < 8) {
    this.errors.push('비밀번호는 8자 이상이어야합니다');
  }
  // 최대 패스워드 길이
  if (this.data.password.length > 20) {
    this.errors.push('비밀번호는 20자를 초과할 수 없습니다');
  }
  // 최소 이름 길이
  if (this.data.username.length > 0 && this.data.username.length < 1) {
    this.errors.push('사용자이름이 2글자 이상인지 확인해주세요');
  }
  // 최대 이름 길이
  if (this.data.username.length > 30) {
    this.errors.push('사용자이름이 너무 깁니다');
  }
};

/* register 상속 */
User.prototype.register = function () {
  // 1단계: 유저 데이터 유효성 검사하기

  // 여기서 this 키워드가 가리키는 것은 유저가 제출한 데이터로 생성되는 user 객체
  this.validate();
  // 2단계: 유효성에 문제가 없다면 (에러가 없다면) DB에 유저 데이터 저장하기
};

module.exports = User;
