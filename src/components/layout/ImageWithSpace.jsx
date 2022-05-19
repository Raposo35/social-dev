import styled from 'styled-components';

const StyledFlex = styled.div`
	display: flex;
`;

const WIDTH_BREAK = '700px';

const StyledImage = styled.div`
	background-image: url('${(props) => props.image}');
	background-position: right;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100vh;

	@media (max-width: ${WIDTH_BREAK}) {
		display: none;
	}
`;

const StyledContainer = styled.div`
	background-color: ${(props) => props.theme.white};
	padding: 30px 50px;
	@media (min-width: ${WIDTH_BREAK}) {
		min-width: calc(${WIDTH_BREAK} - 100px);
	}
	@media (max-width: ${WIDTH_BREAK}) {
		width: 100%;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function ImageWithSpace({ children, image }) {
	return (
		<StyledFlex>
			<StyledImage image={image} />
			<StyledContainer>{children}</StyledContainer>
		</StyledFlex>
	);
}

ImageWithSpace.defaultProps = {
	image: '/coffee-background.jpg',
};

export default ImageWithSpace;