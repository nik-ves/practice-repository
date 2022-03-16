const express = require("express");
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

const app = express();

// app.use(express.static(`${__dirname}/public`));

// for us to be able to send data with post request this middleware needs to be here
app.use(express.json());

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
