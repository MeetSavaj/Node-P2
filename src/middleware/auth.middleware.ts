import { NextFunction, Response, Request } from "express";
import { InternalServerErrorResponse, UnauthorizedResponse } from "../helpers/http";
import { decode } from "../helpers/jwt";
import { Val_User } from "../models/val_user";

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (!token) return UnauthorizedResponse(res);
        const decoded_token = decode(token);
        const user = await Val_User.findOne({
            where: {
                password: decoded_token.password,
                status: 1
            }
        })
        if (!user) return UnauthorizedResponse(res);
        res.locals.token = decoded_token;
        return next();

    } catch (err: any) {
        return UnauthorizedResponse(res, err.message);
    }
};