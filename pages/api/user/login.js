import Joi from 'joi'; // validador do middleware
// validar o usuário
import { withIronSessionApiRoute } from 'iron-session/next';

import createHandler from '../../../lib/middlewares/nextConect';
// middleware para detectar erro de validação
import validate from '../../../lib/middlewares/validate';
import { loginUser } from '../../../modules/user/user.service';
// validar o usuário
import { ironConfig } from '../../../lib/middlewares/ironsession';

const loginSchema = Joi.object({
	userOrEmail: Joi.string().required(),
	password: Joi.string().required(),
});

const handle = createHandler();

handle.post(validate({ body: loginSchema }), async (req, res) => {
	try {
		const user = await loginUser(req.body);
		// criar uma sessão para validar o usuário
		req.session.user = {
			id: user._id,
			user: user.user,
		};
		await req.session.save();

		res.send({ ok: true }); // não expor os dados do usuário na rota
	} catch (err) {
		console.error(err);
		throw err;
	}
});

// envolver para validar o usuário
export default withIronSessionApiRoute(handle, ironConfig);
