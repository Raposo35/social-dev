import { signupUser } from '../../../modules/user/user.service';

// rotas

function signup(req, res) {
	signupUser();
	res.status(200).json({ message: 'Eu sou foda' });
}

export default signup;
