import connect from 'next-connect'; // serve pra definir o verbo
import databaseMiddleware from './mongoose'; // conectar com o banco de dados

// função responsável em conectar o banco em qualquer página
export default function createHandler() {
	return connect().use(databaseMiddleware);
}
