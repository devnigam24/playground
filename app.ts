"use strict";

import * as express from 'express';
import * as bodyParser from 'body-parser';
import AppRouter from './routes';
import Store from './redux/store';

class Application {
  public app: express.Application;

  private router: express.Router;

  constructor() {
    this.app = express();
    this.router = new AppRouter().router;
    this.appUse();
    this.loadInitilizers();
  };

  private appUse(): void {
    this.app.use(express.static('.'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(this.router);
  }

  private loadInitilizers(): void {
    console.log(Store);
  }
}
export default Application;