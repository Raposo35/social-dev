import styled from 'styled-components';
import { withIronSessionSsr } from 'iron-session/next'; // para getserverside
import { ironConfig } from '../lib/middlewares/ironsession'; // para getserverside

import CreatePost from '../src/components/cards/CreatePost';
import Container from '../src/components/layout/Container';
import Navbar from '../src/components/layout/Navbar';
import H3 from '../src/components/typography/H3';
import Post from '../src/components/cards/Post';

const Content = styled.div`
	margin: 50px 0;
`;

const LastPostText = styled(H3)`
	// chamando H3 e complementando com padding
	padding: 40px 0;
`;

const RefreshPostContainer = styled.div`
	text-align: center;
`;

const RefreshPosts = styled.span`
	font-weight: bold;
	color: ${(props) => props.theme.primary};
	cursor: pointer;
`;

const PostCantainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 20px;
`;

function HomePage({ user }) {
	return (
		<>
			<Navbar />
			<Content>
				<Container>
					<CreatePost username={user.user} />
					<LastPostText>Útimas postagens:</LastPostText>
					<RefreshPostContainer>
						<RefreshPosts>Carregar novas postagens</RefreshPosts>
					</RefreshPostContainer>
					<PostCantainer>
						<Post />
						<Post />
						<Post />
					</PostCantainer>
				</Container>
			</Content>
		</>
	);
}

// server side rendering

export const getServerSideProps = withIronSessionSsr(
	async function getServerSideProps({ req }) {
		const user = req.session.user;

		// se user não existir não abrir a pagina index
		if (!user) {
			return {
				redirect: {
					permanent: false,
					destination: '/login',
				},
			};
		}

		return {
			props: { user },
		};
	},
	ironConfig
);

export default HomePage;
