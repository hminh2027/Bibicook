const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { port } = require("./config/config");
const routes = require("./routes/index");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routers
app.use("/v1", routes);

app.use(helmet());

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log("Server started at port " + port);
});
