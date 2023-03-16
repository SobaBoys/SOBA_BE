const express = require('express');

const app = express();
const router = require('./router');

/* 보일러플레이트 코드 */
// 1. HTML FORM 제출에 대한 설정 코드
app.use(express.urlencoded({ extended: false }));
// 2. JSON 데이터를 전송하기 위한 설정 코드
app.use(express.json());

app.use(express.static('src/public'));
// 첫번째 views 는 express 옵션이고 두번째 views 는 우리가 정한 폴더 이름이다
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use('/', router);

// base url
app.get('/', (req, res) => {
  res.render('home-guest');
});

app.listen(8080);
