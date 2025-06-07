import pg from "pg";
import express from "express";
import "dotenv/config";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
db.connect();

app.use(express.json());
app.use(cors());

app.post("/checkUserName", async (req, res) => {
  const username = req.body.username;
  const result = await db.query("SELECT * FROM users WHERE username=($1)", [
    username,
  ]);
  const exists = result.rowCount > 0;
  res.json({ exists });
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const result = await db.query("SELECT * FROM users WHERE username=($1)", [
    username,
  ]);
  const passwordStored = result.rows[0].password_hash;
  bcrypt.compare(password, passwordStored, (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
    } else {
      if (result) {
        res.json({ result });
      } else {
        res.json({ result });
      }
    }
  });
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      const result = await db.query(
        "INSERT INTO users (username, password_hash) VALUES ($1, $2)",
        [username, hash]
      );
      res.json({ result });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
