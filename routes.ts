import AbstractRouter from './routing/AbstractRouter';
import { fakedb } from './fakes/db';
import moduleNames from './constants/module-names';
import { ExpressHttp } from './constants/interfaces'

class AppRouter extends AbstractRouter {
    constructor() {
      super();
      this.setupRoutes();
    }

    setupRoutes(): void {
      this.router.get('/welcome', (request: ExpressHttp.Req , response: ExpressHttp.Res): void => {
        return this.renderFullPage(moduleNames.WELCOME_PAGE, request, response);
      });

      this.router.get('/start', (request: ExpressHttp.Req, response: ExpressHttp.Res): void => {
        return this.renderFullPage(moduleNames.START_GAME, request, response);
      });

      this.router.get('/db', (request: ExpressHttp.Req, response: ExpressHttp.Res): void => {
        response.send(fakedb);
      });
    }
};

export default AppRouter;