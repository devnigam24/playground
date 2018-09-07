import * as express from 'express';
import { fakedb } from './db';
import moduleNames from './module-names';
import fetch from  './services/apollo-fetch-server';

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

      this.setupRoutes();
    }

    setupRoutes(): void {
      this.router.get('/', (request: express.Request, response: express.Response): void => {
        response.sendFile(`${__dirname}/index.html`);
      });

      this.router.get('/start', (request: express.Request, response: express.Response): void => {
        response.sendFile(this.getIndexHtmlFile(moduleNames.START_GAME));
      });

      this.router.get('/db', (request: express.Request, response: express.Response): void => {
        response.send(fakedb);
      });

      this.router.get('/apollo-fetch', (request: express.Request, response: express.Response): void => {
        response.send();
      });
    }

    private getIndexHtmlFile(moduleNmae: string): string {
      return `${__dirname}/modules/${moduleNmae}/index.html`;
    }
};

export default AppRouter;