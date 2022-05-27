import Joi from 'joi'; // validador do middleware
import createHandler from '../../../lib/middlewares/nextConect';

// middleware para detectar erro de validação
import validate from '../../../lib/middlewares/validate';
import { loginUser } from '../../../modules/user/user.service';

const loginSchema = Joi.object({
	userOrEmail: Joi.string().required(),
	password: Joi.string().required(),
});

const login = createHandler();

login.post(validate({ body: loginSchema }), async (req, res) => {
	try {
		const user = await loginUser(req.body);
		res.send(user);
	} catch (err) {
		console.error(err);
		throw err;
	}
});

export default login;
