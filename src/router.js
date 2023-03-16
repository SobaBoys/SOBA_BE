const express = require('express');

const router = express.Router();
// 컨트롤러를 require 함수로 임포트해서 컨트롤러에서 정의한 함수들을 모두 불러온다

const userController = require('./controllers/userController');
// base URL
// userController 변수가 반환하는 객체 중 home 함수를 가져온다
router.get('/', userController.home);
router.post('/register', userController.register);

// 파일 간에 코드를 공유하기 위해서 라우터를 export 해준다
// 객체를 export 해 줄 수도 있다
module.exports = router;
