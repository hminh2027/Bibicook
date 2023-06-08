const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");
const ApiError = require("./utils/apiError");
const httpStatus = require("http-status");
const { config } = require("./config");
const { errorConverter, errorHandler } = require("./middlewares");

const app = express();

// const corsOptions = {
//   //To allow requests from client
//   origin: true,
//   methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
//   credentials: true,
//   preflightContinue: true,
// };

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

// Router
app.use("/api", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log("Server started at port " + config.port);
});
