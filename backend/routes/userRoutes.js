const express = require("express");
const userCtrl = require("../Controllers/userControllers");

const router = express.Router();

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;