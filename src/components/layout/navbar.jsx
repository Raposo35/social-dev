import styled from 'styled-components';

const StyledNavbar = styled.div`
	display: flex;
	align-items: center;
	height: 80px;
	padding: 0 100px;
	background-color: ${(props) => props.theme.white};

	@media (max-width: 500px) {
		padding: 0 20px;
	}
`;

const StyledLogo = styled.span`
	flex: 1; // Social deve oucupar o máximo de espaço
	font-weight: bold;
	font-size: 20px;
`;

function Navbar() {
	return (
		<StyledNavbar>
			<StyledLogo># Social Dev</StyledLogo>
			<div>
				<a href="#">Desconectar</a>
			</div>
		</StyledNavbar>
	);
}

export default Navbar;
