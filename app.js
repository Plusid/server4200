const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>My node App</h1>');
});

app.listen(4200, () => {
	console.log('App listen on port 4200!');
});