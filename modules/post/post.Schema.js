import Joi from 'joi'; // validador do middleware Formulários

export const createPostSchema = Joi.object({
	text: Joi.string()
		.required()
		.max(256)
		.message('O campo "nome" pode ter no máximo {{#limit}} caracteres'),
});
