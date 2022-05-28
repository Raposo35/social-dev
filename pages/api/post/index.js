import { withIronSessionApiRoute } from 'iron-session/next';

import createHandler from '../../../lib/middlewares/nextConect';
// middleware para detectar erro de validação
import validate from '../../../lib/middlewares/validate';
import { ironConfig } from '../../../lib/middlewares/ironsession';

import { createPostSchema } from '../../../modules/post/post.Schema';
import { createPost, getPosts } from '../../../modules/post/post.service';

const handler = createHandler();

handler
	.post(validate({ body: createPostSchema }), async (req, res) => {
		try {
			if (!req.session.user) return res.status(401).send();
			const newPost = await createPost(req.body, req.session.user);
			res.status(201).send(newPost);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	})
	.get(async (req, res) => {
		try {
			if (!req.session.user) return res.status(401).send();

			const posts = await getPosts();
			res.status(200).send(posts);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	});

// envolver para validar o usuário
export default withIronSessionApiRoute(handler, ironConfig);
