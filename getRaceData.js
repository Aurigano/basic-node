const client = require("./connection");
const express = require("express");

const app = express();

app.listen(3000, () => {
	console.log("listening to 3000");
});
async function connectDatabase() {
	try {
		await client.connect();
	} catch (err) {
		console.log(err);
	}
}

async function disconnectDatabase() {
	try {
		await client.end();
	} catch (err) {
		console.log(err);
	}
}

// connectDatabase();

app.get("/raceyear", async (req, res) => {
	try {
		await client.connect();
		const result = await client.query(`SELECT * FROM f1.circuits`);
		res.json(result);
		await client.end();
	} catch (err) {
		console.log(err);
	}
});

app.get("/", function (req, res) {
	res.send("Hello, It's Working and you're at home");
});

app.get("/foo", function (req, res) {
	res.send("Hello, It's Working and you're at foo");
});

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.post("/bar", (req, res) => {
	var body = req.body;
	console.log(body.foo);
	res.send(req.body.foo);
});
