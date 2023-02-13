import { NextFunction, Request, Response } from "express";
import { Bio } from '../../models/bio';
import { BadRequestResponse, CannotDeleteResponse, SuccessResponse } from "../../helpers/http";

export class ModuleContoller {

    public getAllModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const module = await Bio.findAll();

            return SuccessResponse(res, 'Ok', module);
        } catch (err) {
            next(err);
        }
    }

    public createModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;
            const module = await Bio.create(body);
            
            if (module) {
                return SuccessResponse(res, 'Module created successfully');
            } else {
                return BadRequestResponse(res, 'Module already exist');
            }
        } catch (err) {
            next(err);
        }
    }

    public updateModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;
            const { id } = req.params;
            const module = await Bio.findByPk(id);
            if (module) {
                await module.update(body);
                return SuccessResponse(res, 'Module updated successfully');
            } else {
                return BadRequestResponse(res, 'Module not found');
            }
        } catch (err) {
            next(err);
        }
    }

    public deleteModule = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const permission = await Bio.findOne({ where: { id: id } });
            if (!permission) return CannotDeleteResponse(res);
            const module = await Bio.findByPk(id);
            if (module) {
                await module.destroy();
                return SuccessResponse(res, 'Module deleted successfully');
            } else {
                return BadRequestResponse(res, 'Module not found');
            }
        } catch (err) {
            next(err);
        }
    }
}