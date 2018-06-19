import * as http from 'http';
import app from './app';
import ENV from './environment';

const port = ENV.APP.port;

http.createServer(app).listen(port, () => {
    console.log(`Server Listening to ${port}`);
});
