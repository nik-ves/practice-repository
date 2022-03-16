require("dotenv").config();
const express = require("express");
const fs = require("fs");

const app = express();

// for us to be able to send data with post request this middleware needs to be here
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  // req.params.id is a string so it needs to be converted to a number
  const tour = tours.find((tour) => tour.id === +req.params.id);

  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID.",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      tour: req.body,
    },
  });
});

app.patch("/api/v1/tours/:id", (req, res) => {
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID.",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
});

app.delete("/api/v1/tours/:id", (req, res) => {
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID.",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
