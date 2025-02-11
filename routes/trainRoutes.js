const express = require("express");
const { addTrain, getTrains } = require("../controllers/trainController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

router.post("/add", adminMiddleware, addTrain);
router.get("/search", getTrains);

module.exports = router;
