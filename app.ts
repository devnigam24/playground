import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes';

const app = express();
app.use(express.static("."));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

export default app;