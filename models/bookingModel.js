const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");
const Train = require("./trainModel");

const Booking = sequelize.define("Booking", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
  trainId: { type: DataTypes.INTEGER, references: { model: Train, key: "id" } },
  status: {
    type: DataTypes.ENUM("confirmed", "cancelled"),
    defaultValue: "confirmed",
  },
});

module.exports = Booking;
