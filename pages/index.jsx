import styled from 'styled-components';

import CreatePost from '../src/components/cards/CreatePost';
import Container from '../src/components/layout/Container';
import Navbar from '../src/components/layout/Navbar';

const Content = styled.div`
	margin: 50px 0;
`;

function HomePage() {
	return (
		<>
			<Navbar />
			<Content>
				<Container>
					<CreatePost />
				</Container>
			</Content>
		</>
	);
}

export default HomePage;
