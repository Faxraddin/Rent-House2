const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/user.js");

router.get("/allUsers", getAllUsers);

module.exports = router;
