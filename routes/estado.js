const express = require('express');
const router = express.Router();
const estado = require('../package.json');

// Ruta GET para obtener la información del package.json
router.get('/', (req, res) => {
	const { nameSystem, version, developer, email } = estado;
	const selectedFields = { nameSystem, version, developer, email };
	res.json(selectedFields);
});

module.exports = router;