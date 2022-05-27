// configuração do mongoose para conectar com o bando de dados

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const databaseMiddleware = async (req, res, next) => {
	try {
		if (!global.mongoose) {
			global.mongoose = await mongoose.connect(MONGODB_URI);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send('Database error');
	}
	return next();
};

export default databaseMiddleware;
