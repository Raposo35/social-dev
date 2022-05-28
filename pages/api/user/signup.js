// rotas

import { withIronSessionApiRoute } from 'iron-session/next';

import createHandler from '../../../lib/middlewares/nextConect';
// middleware para detectar erro de validação
import validate from '../../../lib/middlewares/validate';
import { signupUser } from '../../../modules/user/user.service';

// devido o envio do formulário
import { signupSchema } from '../../../modules/user/user.schema';

import { ironConfig } from '../../../lib/middlewares/ironsession';

// foi modificado o nome de signupSchema e transferido para user.module
/* const postSchema = Joi.object({
	firstName: Joi.string().required().max(50),
	lastName: Joi.string().required().max(50),
	user: Joi.string().required().max(30),
	email: Joi.string().email().required().max(100),
	password: Joi.string().required().max(50).min(6),
}); */

// primeiro parametro do post validate
const signup = createHandler();

signup.post(validate({ body: signupSchema }), async (req, res) => {
	try {
		const user = await signupUser(req.body);

		// criar uma sessão para validar o usuário
		req.session.user = {
			id: user._id,
			user: user.user,
		};
		await req.session.save();

		res.status(201).json({ ok: true });
	} catch (err) {
		if (err.code === 11000) {
			return res.status(400).send({
				code: 11000,
				duplicatedKey: Object.keys(err.keyPattern)[0],
			});
		}
		throw err;
	}
});

export default withIronSessionApiRoute(signup, ironConfig);
