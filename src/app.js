import express from "express";
import routes from "./routes";

const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:8080" }));
app.use("/", routes);

module.exports = app;
