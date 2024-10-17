const express = require('express');

const app = express();

const port = 8080;

app.get('/',(req, res) => {
	res.send("Hello World");
});

app.get('/greet/:name', (req, res) => {
	const userName = req.params.name;
	res.send(`Hello ${userName}`);
});


app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});
