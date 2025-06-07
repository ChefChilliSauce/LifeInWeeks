import pg from "pg";
import express from "express";
import "dotenv/config";
import cors from "cors";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";

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
app.use(
  session({
    secret: process.env.SECRETKEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
  const response = await db.query("SELECT * FROM users WHERE username=($1)", [
    username,
  ]);
  const passwordStored = response.rows[0].password_hash;
  bcrypt.compare(password, passwordStored, (err, result) => {
    const userObj = {
      username: username,
      fullName: response.rows[0].name,
      DOB: response.rows[0].full_date_of_birth,
      date: response.rows[0].birth_day,
      month: response.rows[0].birth_month,
      year: response.rows[0].birth_year,
      specialDates: response.rows[0].special_dates,
    };
    if (err) {
      console.log(err);
    } else {
      if (result) {
        res.json({ result: true, user: userObj });
      } else {
        res.json({ result: false });
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
      const response = await db.query(
        "INSERT INTO users (username, password_hash) VALUES ($1, $2)RETURNING *",
        [username, hash]
      );
      const userObj = {
        username: username,
        fullName: response.rows[0].name,
        DOB: response.rows[0].full_date_of_birth,
        date: response.rows[0].birth_day,
        month: response.rows[0].birth_month,
        year: response.rows[0].birth_year,
        specialDates: response.rows[0].special_dates,
      };
      if (err) {
        console.log(err);
      } else {
        if (response) {
          res.json({ result: true, user: userObj });
        } else {
          res.json({ result: false });
        }
      }
    }
  });
});

app.post("/setDOB", async (req, res) => {
  const username = req.body.username;
  const dob = req.body.dob;
  const year = req.body.year;
  const month = req.body.month;
  const day = req.body.day;
  const result = await db.query(
    "UPDATE users SET full_date_of_birth = $1, birth_year = $2, birth_month = $3, birth_day = $4 WHERE username = $5 RETURNING *",
    [dob, year, month, day, username]
  );
  const userObj = {
    username: result.rows[0].username,
    fullName: result.rows[0].name,
    DOB: result.rows[0].full_date_of_birth,
    date: result.rows[0].birth_day,
    month: result.rows[0].birth_month,
    year: result.rows[0].birth_year,
    specialDates: result.rows[0].special_dates,
  };
  res.json({ user: userObj });
});

app.post("/AddSpecialMilestone", async (req, res) => {
  const username = req.body.username;
  const week = req.body.week;
  const message = req.body.message;
  const result = await db.query(
    `UPDATE users
   SET special_dates = 
     CASE 
       WHEN special_dates IS NULL THEN 
         jsonb_build_array(jsonb_build_object('week', ($1)::int, 'message', ($2)::text))
       ELSE 
         special_dates || jsonb_build_array(jsonb_build_object('week', ($1)::int, 'message', ($2)::text))
     END
   WHERE username = $3
   RETURNING *`,
    [week, message, username]
  );

  const userObj = {
    username: result.rows[0].username,
    fullName: result.rows[0].name,
    DOB: result.rows[0].full_date_of_birth,
    date: result.rows[0].birth_day,
    month: result.rows[0].birth_month,
    year: result.rows[0].birth_year,
    specialDates: result.rows[0].special_dates,
  };
  res.json({ user: userObj });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
