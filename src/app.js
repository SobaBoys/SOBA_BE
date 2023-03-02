import express from 'express';

const app = express();

app.get('/welcome', (req, res) => {
  res.send('welcome!');
});

app.listen('8080', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8080🛡️
  ################################################
`);
});
