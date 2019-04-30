const express = require("express");
const sendEmailController = require("../api/SendEmail");

const router = express.Router();

module.exports = router
    .post("/send-email", sendEmailController.send)