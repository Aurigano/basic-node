const { Client } = require("pg");

const dbPassword = `${encodeURIComponent("VJq18xsPBhZPgSBkh5sTWiQ1xckhoB1Y")}`;
const connectionString = `postgres://aurigano:${dbPassword}@dpg-cg5jeandvk4pls5cv5dg-a.singapore-postgres.render.com/f1database?ssl=true`;
const client = new Client(connectionString);

module.exports = client;
