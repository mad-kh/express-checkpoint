const express = require("express");
const app = express();

const Timeofservice = require("./Timeofservice");
app.use(express.static("views"));
app.set("views", "./views");
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});

const port = 5000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`http://localhost:${port}`);
});
