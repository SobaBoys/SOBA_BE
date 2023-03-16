const express = require('express');

const app = express();
const router = require('./router');

app.use(express.static('public'));
// 첫번째 views 는 express 옵션이고 두번째 views 는 우리가 정한 폴더 이름이다
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use('/', router);

// base url
app.get('/', (req, res) => {
  res.render('home-guest');
});

app.listen(8080);
