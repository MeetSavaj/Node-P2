import express from 'express';
import { AuthRoutes } from './modules/auth/auth.routes';
import { ModuleRoutes } from './modules/module/module.routes';

export class Routes {
    router = express.Router();


    path() {
        this.router.use('/module', new ModuleRoutes().router);
        this.router.use('/login', new AuthRoutes().router);

        return this.router;
    }
}