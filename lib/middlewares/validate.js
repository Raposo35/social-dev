import withJoi from 'next-joi'; // midleware para detectar erro

export default withJoi({
	onValidationError: (req, res, error) => {
		return res.status(400).send(error.details);
	},
});
