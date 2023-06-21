import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import jwt from "jsonwebtoken";
import chalk from "chalk";
import bcrypt from "bcrypt";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3301;

console.log(chalk.bold("Запуск Dusiburg ID Server 2.5.1..."));
console.log(`${chalk.bgMagenta.bold("Summer")} is ${chalk.bgMagenta.bold("coming")}!\n`);

console.log(chalk.green("Модули успешно загружены!"));

app.use(cors());
app.use(bodyParser.json());

const db = {
  user: "gen_user",
  host: "85.234.110.103",
  database: "default_db",
  password: "sklsq46os4",
  port: 5432,
};

const pool = new pg.Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
});

pool.connect((error) => {
  if (error) {
    console.error(chalk.red(`Error connecting to DU Database Port: ${error}`));
  } else {
    console.log(chalk.green("Success") + " connection to DU Database Port!");
  }
});

let secret_key;

async function getSecretKey() {
  try {
    const result = await pool.query("SELECT secret_key FROM secret_keys WHERE id = 1");
    secret_key = result.rows[0].secret_key;
  } catch (error) {
    console.error(chalk.red(`Ошибка при получении секретного ключа: ${error}`));
  }
}

getSecretKey();

async function generateUid() {
  let uid;

  do {
    uid = uuidv4();
    const result = await pool.query("SELECT uid FROM users WHERE uid = $1", [uid]);
    if (result.rows.length === 0) {
      break;
    }
  } while (true);

  return uid;
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }

  jwt.verify(token, secret_key, (error, decodedToken) => {
    const ip = req.ip;

    if (error) {
      return res.status(403).json({ status: 403, message: "Token has expired" });
    }

    if (decodedToken.ip !== ip) {
      return res.status(403).json({ status: 403, message: "Invalid client IP" });
    }

    req.uid = decodedToken.uid;
    next();
  });
}

app.post("/api/login", async (req, res) => {
  try {
    const ip = req.ip;
    const { login, password } = req.body;

    const result = await pool.query("SELECT uid, password FROM users WHERE login = $1", [login]);
    const user = result.rows[0];
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ status: 401, message: "Invalid login or password" });
    }

    const token = jwt.sign({ uid: user.uid, ip: ip }, secret_key, { expiresIn: "7d" });
    res.json({ status: 200, token: token });
  } catch (error) {
    console.error(chalk.red(error));
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { login, password, name, surname } = req.body;
    
    if (!login || !password || !name || !surname) {
      return res.status(400).json({ status: 400, error: "Missing required fields" });
    }

    const existingUser = await pool.query("SELECT login FROM users WHERE login = $1", [login]);
    if (existingUser.rowCount > 0) {
      return res.status(409).json({ status: 409, error: "User already exists" });
    }

    const uid = await generateUid();
    const hashedPassword = bcrypt.hashSync(password, 10);

    await pool.query("INSERT INTO users (uid, login, password, name, surname) VALUES ($1, $2, $3, $4, $5)", [uid, login, hashedPassword, name, surname]);
    
    res.json({ status: 200, uid: uid });
  } catch (error) {
    console.error(chalk.red(error));
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

app.get("/api/errors/:code", async (req, res) => {
  try {
    const code = req.params.code;

    const result = await pool.query("SELECT message FROM errors WHERE code = $1", [code]);
    if (result.rowCount === 0) {
      res.json({ status: 404, message: "Code not found" });
    } else {
      const error = result.rows[0];
      res.json({ status: 200, message: error.message });
    }
  } catch (error) {
    console.error(chalk.red(error));
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
});

app.post("/api/user", authenticateToken, async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pool.query("SELECT login, name, surname FROM users WHERE uid = $1", [uid]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ status: 404, message: "User not found" });

    res.json({ status: 200, user: user });
  } catch (error) {
    console.error(chalk.red(error));
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(chalk.cyan.bold(`Сервер запущен на порту ${port}!\n`));
});