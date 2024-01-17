import * as Joi from "joi";


export const createJobSchema = Joi.object({
  companyName: Joi.string().required(),

  title: Joi.string().required(),

  email: Joi.string().email().required(),

  experience: Joi.number().integer().required(),

  salary: Joi.number().required(),

  tags: Joi.array().items(Joi.string()).min(0),

  isActive: Joi.boolean(),
});