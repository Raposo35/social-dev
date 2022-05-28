// controller - para trabalhar com os dados no banco

import { hashPassword, comparePassword } from '../../utils/bcrypt'; // transformar a senha hash

import User from './user.model';

export const signupUser = async (body) => {
	try {
		const user = {
			...body, // pegar todos os dados do body
			password: hashPassword(body.password), // convertendo password em hash
		};
		const dataUser = await User.create(user); // criando os dados no banco
		return dataUser;
	} catch (err) {
		throw err;
	}
};

export const loginUser = async (body) => {
	try {
		// procurar usuário ou email no banco
		const user = await User.findOne({
			// devido ser usuário ou email
			$or: [{ email: body.userOrEmail }, { user: body.userOrEmail }],
		});

		// se não tiver user retorna erro
		if (!user) throw new Error('not found');

		// verificar o password do body com a do user no banco
		const passwordIsCorrect = comparePassword(body.password, user.password);
		if (!passwordIsCorrect) throw new Error('password incorrect');

		return user;
	} catch (err) {
		throw err;
	}
};
