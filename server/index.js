import express from "express";
import pg from "pg";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import chalk from "chalk";

const app = express();
const port = 3300;

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

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  try {
    const { login, password, name, surname, country, gender } = req.body;

    if (!login || !password || !name || !surname || !country || !gender) {
      return res.status(400).json({ error: "Пожалуйста, заполните все обязательные поля." });
    }

    const hashedPassword = await hash(password, 10);

    const query = "INSERT INTO users (login, password, name, surname, country, gender) VALUES ($1, $2, $3, $4, $5, $6)";
    await pool.query(query, [login, hashedPassword, name, surname, country, gender]);

    res.status(201).json({ message: "Регистрация успешна." });
  } catch (error) {
    console.error(chalk.red("Ошибка при регистрации:"), error);
    res.status(500).json({ error: "Произошла ошибка при регистрации." });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({ error: "Пожалуйста, заполните все обязательные поля." });
    }

    const query = "SELECT * FROM users WHERE login = $1";
    const result = await pool.query(query, [login]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Неверное имя пользователя или пароль." });
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Неверное имя пользователя или пароль." });
    }

    const token = jwt.sign({ id: user.id }, "your_secret_key");
    res.status(200).json({ token: token });
  } catch (error) {
    console.error(chalk.red("Ошибка при входе:"), error);
    res.status(500).json({ error: "Произошла ошибка при входе." });
  }
});

app.post("/api/user", (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "your_secret_key");

    const query = "SELECT name, surname, country, gender FROM users WHERE id = $1";
    const result = pool.query(query, [decodedToken.id]);
    const user = result.rows[0];

    res.status(200).json({ user });
  } catch (error) {
    console.error(chalk.red("Ошибка при получении профиля:"), error);
    res.status(401).json({ error: "Неверный токен." });
  }
});

app.listen(port, () => {
  console.log(chalk.green(`Сервер запущен на порту ${port}.`));
});