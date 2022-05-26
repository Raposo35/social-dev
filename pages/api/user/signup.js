// rotas

import connect from 'next-connect'; // serve pra definir o verbo
import Joi from 'joi'; // validador do middleware
import validate from '../../../lib/middlewares/validate'; // middleware para detectar erro

const postSchema = Joi.object({
	firstName: Joi.string().required().max(50),
	lastName: Joi.string().required().max(50),
	user: Joi.string().required().max(30),
	email: Joi.string().email().required().max(100),
	password: Joi.string().required().max(50).min(6),
});

import { signupUser } from '../../../modules/user/user.service';

// primeiro parametro do post validate
const signup = connect().post(validate({ body: postSchema }), (req, res) => {
	signupUser(req.body);
	res.status(200).send();
});

export default signup;
