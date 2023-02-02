const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT_BACKEND;

app.get('/', (req, res) => {
	res.json({
		status: 'success',
	});
});

app.listen(PORT, () => {
	console.log(`Express is listening at ${PORT}`);
});
