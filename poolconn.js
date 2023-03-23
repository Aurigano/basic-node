const { Pool } = require("pg");

const dbPassword = `${encodeURIComponent("VJq18xsPBhZPgSBkh5sTWiQ1xckhoB1Y")}`;
const pool = new Pool({
	host: "dpg-cg5jeandvk4pls5cv5dg-a.singapore-postgres.render.com",
	user: "aurigano",
	port: 5432,
	password: dbPassword,
	database: "f1database",
	ssl: true,
	max: 8,
	connectionTimeoutMillis: 0,
	idleTimeoutMillis: 0,
});
// const connectionString = `postgres://aurigano:${dbPassword}@dpg-cg5jeandvk4pls5cv5dg-a.singapore-postgres.render.com/f1database?ssl=true`;
// const client = new Client(connectionString);

module.exports = pool;
