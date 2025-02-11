const Train = require("../models/trainModel");

exports.addTrain = async (req, res) => {
  const { name, source, destination, availableSeats } = req.body;
  const train = await Train.create({
    name,
    source,
    destination,
    availableSeats,
  });
  res.json(train);
};

exports.getTrains = async (req, res) => {
  const { source, destination } = req.query;
  const trains = await Train.findAll({ where: { source, destination } });
  res.json(trains);
};
