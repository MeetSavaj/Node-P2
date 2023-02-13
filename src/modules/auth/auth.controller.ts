import { NextFunction, Request, Response } from "express";
import { BadRequestResponse, SuccessResponse } from "../../helpers/http";
import { encode } from "../../helpers/jwt";
import { Val_User } from "../../models/val_user";

export class AuthController {

    public login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req;
            const password = encode(body.password);
            const user = await Val_User.findOne({
                where: {
                    email: body.email,
                }
            });
            if (!user) return BadRequestResponse(res, 'Invalid Email Address');
            if (!user.status) return BadRequestResponse(res, 'Your account has been suspended by admin due to some reason, Please contact administrator');
            if (password !== user.password) return BadRequestResponse(res, 'Invalid Password');
            const date = new Date();
            const token = encode({
                user_id: user.id,
                // role_id: user.role_id,
                email: user.email,
                password: user.password,
                status: user.status,
                iat: Math.floor(date.getTime() / 1000),
                exp: Math.floor((date.setDate(date.getDate() + 7)) / 1000),
            });
            const response = {
                token: token,
                email: user.email,
                password: user.password,
                // role_id: user.role_id,
            };
            return SuccessResponse(res, 'Login Successfully', response);
        } catch (err) {
            next(err);
        }
    }

}