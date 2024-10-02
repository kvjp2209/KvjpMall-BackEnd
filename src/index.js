const express = require("express");
const app = express();
const port = 5001;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Kvjp is listening to http://localhost:${port}`)
);
