// rotas

import createHandler from '../../../lib/middlewares/nextConect';
import Joi from 'joi'; // validador do middleware

// middleware para detectar erro de validação
import validate from '../../../lib/middlewares/validate';
import { signupUser } from '../../../modules/user/user.service';

const postSchema = Joi.object({
	firstName: Joi.string().required().max(50),
	lastName: Joi.string().required().max(50),
	user: Joi.string().required().max(30),
	email: Joi.string().email().required().max(100),
	password: Joi.string().required().max(50).min(6),
});

// primeiro parametro do post validate
const signup = createHandler();

signup.post(validate({ body: postSchema }), (req, res) => {
	signupUser(req.body);
	res.status(200).send();
});

export default signup;
