import { Joi, Segments } from 'celebrate';

export const getStudentsSchema = {
  [Segments.QUERY]: Joi.object({
    // page: Joi.number().integer().min(1).default(1),
    // perPage: Joi.number().integer().min(5).max(20).default(10),
    gender: Joi.string().valid('male', 'female', 'other'),
    minAvgMark: Joi.number().positive(),
  }),
};
