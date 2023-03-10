const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
	console.log(`Listening at Port ${port}`);
});

app.get("/", function (req, res) {
	res.send("Hello, It's Working and you're at home");
});

app.get("/foo", function (req, res) {
	res.send("Hello, It's Working and you're at foo");
});

app.post("/bar", (req, res) => {
	var body = req.body;
	console.log(body.foo);
	res.send(req.body.foo);
});

app.use(
	express.urlencoded({
		extended: true,
	})
);
