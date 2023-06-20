import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import jwt from "jsonwebtoken";
import chalk from "chalk";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
const port = 3301;

console.log(chalk.bold("Запуск Dusiburg ID Server 2.5.1..."));
console.log(`${chalk.bgMagenta.bold("Summer")} is ${chalk.bgMagenta.bold("coming")}!\n`);

console.log(chalk.green("Модули успешно загружены!"));

function checkContentType(req, res, next) {
  const contentType = req.headers["content-type"];
  if (contentType !== "application/json") {
    return res.status(400).send({ error: "Method not allowed" });
  }
  next();
}

app.use(cors());
app.use(bodyParser.json());
app.use(checkContentType);

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

pool.connect((err) => {
  if (err) {
    console.error(chalk.red(`Error connecting to DU Database Port: ${err}`));
  } else {
    console.log(chalk.green("Success") + " connection to DU Database Port!");
  }
});

let secret_key;

async function getSecretKey() {
  try {
    const result = await pool.query("SELECT secret_key FROM secret_keys WHERE id = 1");
    secret_key = result.rows[0].secret_key;
  } catch (err) {
    console.error(chalk.red(`Ошибка при получение секретного ключа: ${err}`));
  }
}

getSecretKey();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ status: 401, error: "Unauthorized" });
  }

  jwt.verify(token, secret_key, (err, destatusdToken) => {
    const ip = req.ip;

    if (err) {
      return res.status(403).json({ status: 403, error: "Token has expired" });
    }

    if (destatusdToken.ip !== ip) {
      return res.status(403).json({ status: 403, error: "Invalid client IP" });
    }

    req.uid = destatusdToken.uid;

    next();
  });
}

app.post("/api/login", async (req, res) => {
  try {
    const ip = req.ip;
    const { login, password } = req.body;

    const result = await pool.query("SELECT uid, password FROM test WHERE login = $1", [login]);
    const user = result.rows[0];
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ status: 401, error: "Invaild login or password" });
    }

    const token = jwt.sign({ uid: user.uid, ip: ip }, secret_key, { expiresIn: "7d" });
    res.json({ status: 200, token: token });
  } catch (err) {
    console.error(chalk.red(err));
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

app.post("/api/test", async (req, res) => {
  try {
    const { login, password } = req.body;

    res.json({ test: "true"});
  } catch (err) {
    console.log("Trash");
  }
});

app.post("/api/user", authenticateToken, async (req, res) => {
  try {
    const uid = req.uid;
    const result = await pool.query("SELECT login, name, surname FROM users WHERE uid = $1", [uid]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ status: 404, error: "User not found" });

    res.json({ status: 200, user: user });
  } catch (err) {
    console.error(chalk.red(err));
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(chalk.cyan.bold(`Сервер запущен на порту ${port}!\n`));
});
