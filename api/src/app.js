const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { port } = require("./config/config");
const routes = require("./routes/index");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/api-error");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routers
app.use("/api", routes);

app.use(helmet());

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
// app.use(errorConverter);

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started at port " + port);
});
