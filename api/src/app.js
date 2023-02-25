const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { port } = require("./config/config");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/api-error");
const httpStatus = require("http-status");
const app = express();
const corsOptions = {
  //To allow requests from client
  origin: true,
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  // exposedHeaders: ["set-cookie"],
  preflightContinue: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
// app.use();

// Routers

app.use("/api", routes);

app.use(helmet());

//https://stackoverflow.com/a/68804883
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});
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
