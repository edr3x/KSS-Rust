const express = require("express");
const app = express();
app.get("/", (_req, res) => {
  res.send("Hello World!");
});
app.listen(5050, () => console.log("Server is running on port 5050."));
