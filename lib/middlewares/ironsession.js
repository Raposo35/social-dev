// gerar o token de acesso para validar o usuário

export const ironConfig = {
	cookieName: process.env.SESSION_TOKEN_NAME, // iserir usuário no .env.local
	password: process.env.SESSION_PASSWORD, // iserir password no .env.local
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production',
	},
};
