const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getOneTour = (req, res) => {
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
};

exports.createTour = (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      tour: req.body,
    },
  });
};

exports.updateTour = (req, res) => {
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
};

exports.deleteTour = (req, res) => {
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
};
