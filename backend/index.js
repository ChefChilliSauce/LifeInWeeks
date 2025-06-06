import pg, { Query } from "pg";
import express from "express";
import "dotenv/config";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
db.connect();

app.get("/", (req, res) => {
  console.log("hello");
  res.send();
});

app.get("/dbtest", async (req, res) => {
  const name = "abhinav";
  const pass = "ahshsa";
  const result = await db.query(
    "INSERT INTO users(username, password_hash) VALUES ($1, $2)",
    [name, pass]
  );
  console.log(result);
  res.send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
