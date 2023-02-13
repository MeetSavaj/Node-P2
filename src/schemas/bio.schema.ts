import { Joi } from 'celebrate';

export const schemaBio = Joi.object({
    
    maleName: Joi.alternatives().conditional('gender', { is: 'Male', then: Joi.string().required(), otherwise: Joi.optional(),}),
    femaleName: Joi.alternatives().conditional('gender', { is: 'Female', then: Joi.string().required(),  otherwise: Joi.optional(),}),
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    country: Joi.string().required(),
    gender: Joi.string().required(),
    joiningdate: Joi.string().required(),
    maleBio: Joi.string().when('gender', { is: 'Male', then: Joi.string().required()}).optional(),
    hobbie: Joi.array().required(),  
});

// export const schemaBio = Joi.object().keys({
    
//     maleName: Joi.alternatives().conditional('gender', { is: 'Male', then: Joi.string().required(), otherwise: Joi.optional(),}),
//     femaleName: Joi.alternatives().conditional('gender', { is: 'Female', then: Joi.string().required(),  otherwise: Joi.optional(),}),
//     age: Joi.number().required(),
//     email: Joi.string().email().required(),
//     country: Joi.string().required(),
//     gender: Joi.string().required(),
//     joiningdate: Joi.string().required(),
//     maleBio: Joi.string().when('gender', { is: 'Male', then: Joi.string().required()}).optional(),
//     hobbie: Joi.array().required(),  
// });