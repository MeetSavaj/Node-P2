import { Router } from "express";
import { bodyvalidator } from "../../middleware/validate.middleware";
import { AuthController } from "../auth/auth.controller";
import { Val_User } from "./auth.schema";

export class AuthRoutes {
    router = Router();
    private authCtrl: AuthController = new AuthController();
    constructor() {

        this.router.post('/dologin', [bodyvalidator(Val_User)], this.authCtrl.login);

    }
}