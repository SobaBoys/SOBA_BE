import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/welcome', (req: Request, res: Response) => {
  res.send('welcome!');
});

app.listen('8080', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8080🛡️
  ################################################
`);
});
