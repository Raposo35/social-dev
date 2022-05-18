import { createGlobalStyle } from 'styled-components';

const GlobaStyles = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}

`;

function App({ Component, pageProps }) {
	return (
		<>
			<GlobaStyles />
			<Component {...pageProps} />
		</>
	);
}

export default App;
