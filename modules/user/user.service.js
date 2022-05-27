// controller

import { hashPassword } from '../../utils/bcrypt'; // transformar a senha hash

import User from './user.module';

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
