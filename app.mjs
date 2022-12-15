/* eslint-disable require-jsdoc */
import GQ from './middlewares/_graphql.mjs';
import * as http from 'http';

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === 'POST' && url.pathname === '/graphql') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const queryObj = JSON.parse(body);
      const result = await GQ.executeQuery(queryObj['query']);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(result));
      res.end();
    });
  }
});
server.listen(5110);
