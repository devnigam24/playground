"use strict";

import * as express from 'express';
import * as bodyParser from 'body-parser';
import AppRouter from './routes';
import Store from './redux/store';

import { setApplicationState } from './constants/actions';

class Application {
  public app: express.Application;

  private router: express.Router;

  constructor() {
    Store.dispatch(setApplicationState('initializing'));
    this.app = express();
    this.router = new AppRouter().router;
    this.appUse();
    this.loadInitilizers();
    Store.dispatch(setApplicationState('initialized'));
  };

  private appUse(): void {
    this.app.use(express.static('.'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(this.router);
  }

  private loadInitilizers(): void {}
}
export default Application;