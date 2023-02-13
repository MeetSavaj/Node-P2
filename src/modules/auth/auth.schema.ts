import { Joi } from "celebrate";

export const Val_User = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});