const { sequelize } = require("../config/db");
const Booking = require("../models/bookingModel");
const Train = require("../models/trainModel");

exports.bookSeat = async (req, res) => {
  const { trainId } = req.body;
  const transaction = await sequelize.transaction();

  try {
    const train = await Train.findOne({
      where: { id: trainId },
      lock: true,
      transaction,
    });
    if (train.availableSeats > 0) {
      train.availableSeats -= 1;
      await train.save({ transaction });
      await Booking.create(
        { userId: req.user.id, trainId, status: "confirmed" },
        { transaction }
      );
      await transaction.commit();
      res.json({ message: "Booking successful" });
    } else {
      await transaction.rollback();
      res.status(400).json({ message: "No seats available" });
    }
  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ message: "Booking failed" });
  }
};
