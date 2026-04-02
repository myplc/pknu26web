const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const _path = path.join(__dirname, "dist");

app.use(express.static(_path));

app.get("/data", (req, res) => {
  const { name, age } = req.query;
  res.send(`${name}님 안녕하세요.${age}살 이시네요.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
