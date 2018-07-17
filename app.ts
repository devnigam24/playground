"use strict";

import * as express from 'express';
import * as bodyParser from 'body-parser';
import AppRouter from './routes';

class Application {
    public app: express.Application;

    private router: express.Router;

    constructor() {
        this.app = express();
        this.router = new AppRouter().router;
        this.appUse();
    };

    private appUse() {
        this.app.use(express.static('.'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(this.router);
    }
}

export default Application;