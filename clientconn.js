const { Client } = require("pg");

const dbPassword = `${encodeURIComponent("VJq18xsPBhZPgSBkh5sTWiQ1xckhoB1Y")}`;
const client = new Client({
	host: "dpg-cg5jeandvk4pls5cv5dg-a.singapore-postgres.render.com",
	user: "aurigano",
	port: 5432,
	password: dbPassword,
	database: "f1database",
	ssl: true,
});
// const connectionString = `postgres://aurigano:${dbPassword}@dpg-cg5jeandvk4pls5cv5dg-a.singapore-postgres.render.com/f1database?ssl=true`;
// const client = new Client(connectionString);

module.exports = client;
