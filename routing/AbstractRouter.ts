import { Router } from 'express';
import { ExpressHttp } from '../constants/interfaces';
import FileRendere from '../services/file-renderer';
import { getIndexHtmlFile } from '../utils/string';

class AbstractRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.setMiddleWare();
  }

  private setMiddleWare(): void {
    this.router.use((request: ExpressHttp.Req, response: ExpressHttp.Res, next: ExpressHttp.Next) => {
      response.header("Access-Control-Allow-Origin", "*");
      next();
    });
  }

  protected renderFullPage(componentFilePath: string, request: ExpressHttp.Req, response: ExpressHttp.Res) {
    return new FileRendere(componentFilePath, response).render();
  }

  protected renderComponent(componentFilePath, request, response) {
    return response.sendFile(getIndexHtmlFile(componentFilePath));
  }

}

export default AbstractRouter;
