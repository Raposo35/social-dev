import bcryptjs from 'bcryptjs'; // transformar a senha em hash

// criar o hash
export const hashPassword = (password) => bcryptjs.hashSync(password);

// comparar o password com o hach
export const comparePassword = (password, hash) =>
	bcryptjs.compareSync(password, hash);
