import AbstractRouter from './routing/AbstractRouter';
import { fakedb } from './fakes/db';
import { moduleRouteMap } from './constants/module-names';
import { ExpressHttp } from './constants/interfaces'

class AppRouter extends AbstractRouter {
    constructor() {
      super();
      this.setupRoutes();
    }

    setupRoutes(): void {
      moduleRouteMap.forEach(mapObjects => {
        this.router.get(mapObjects.routeName, (request: ExpressHttp.Req , response: ExpressHttp.Res): void => {
          return this.renderFullPage(mapObjects.moduleName, request, response);
        });
      });

      this.router.get('/db', (request: ExpressHttp.Req, response: ExpressHttp.Res): void => {
        response.send(fakedb);
      });
    }
};

export default AppRouter;