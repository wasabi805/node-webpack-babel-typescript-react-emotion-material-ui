import express from "express";

const app = express();

import Users from "./apis/users.js";

const port = 8082;

// app.use('/api/users', Users(app))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
