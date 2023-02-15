import { Router } from "express";
import { Auth } from "../../middleware/auth.middleware";
import { bodyvalidator } from "../../middleware/validate.middleware";
import { schemaBio } from "../../schemas/bio.schema";
import { AuthController } from "../auth/auth.controller";
import { ModuleContoller } from "./module.controller";

export class ModuleRoutes {
    router = Router();

    private modulectrl: ModuleContoller = new ModuleContoller();

    constructor() {

        this.router.get('/', [Auth], this.modulectrl.getAllModule);

        this.router.post('/', [Auth, bodyvalidator(schemaBio)], this.modulectrl.createModule);

        this.router.put('/:id',/*[Auth, bodyvalidator(schemaBio)], */this.modulectrl.updateModule);

        this.router.delete('/:id', [Auth], this.modulectrl.deleteModule);
        
    }
}