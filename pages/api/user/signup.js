// rotas

import Joi from 'joi'; // validador do middleware
import createHandler from '../../../lib/middlewares/nextConect';

// middleware para detectar erro de validação
import validate from '../../../lib/middlewares/validate';
import { signupUser } from '../../../modules/user/user.service';

const signupSchema = Joi.object({
	firstName: Joi.string().required().max(50),
	lastName: Joi.string().required().max(50),
	user: Joi.string().required().max(30),
	email: Joi.string().email().required().max(100),
	password: Joi.string().required().max(50).min(6),
});

// primeiro parametro do post validate
const signup = createHandler();

signup.post(validate({ body: signupSchema }), async (req, res) => {
	try {
		const user = await signupUser(req.body);
		res.status(201).json(user);
	} catch (err) {
		console.error(err);
		throw err;
	}
});

export default signup;
