import * as http from 'http';
import * as express from 'express';
import App from './app';
import ENV from './environment';

const port = ENV.APP.port;

http.createServer(new App().app).listen(port, () => {
    console.log(`Server Listening to ${port} port`);
});