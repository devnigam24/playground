import * as express from 'express';
import { fakedb } from './db';

class AppRouter {
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.config();
    }

    config(): void {
        this.router.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
            response.header("Access-Control-Allow-Origin", "*");
            next();
        });

        this.router.get('/', (request: express.Request, response: express.Response): void => {
            response.sendFile(`${__dirname}/templates/index.html`);
        });

        this.router.get('/db', (request: express.Request, response: express.Response): void => {
            response.send(fakedb);
        });
    }
};

export default AppRouter;