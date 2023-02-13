import { NextFunction, Response, Request } from "express";
import moment from "moment";
import { HTTP_MESSAGE } from "../helpers/constants";

export const errorMiddleWare = (error: any, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || HTTP_MESSAGE.UNKNOWN_ERROR;
    console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ', error);
    res.status(status).send({ status, message, });
}