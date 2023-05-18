const express = require("express");
const router = express.Router();
const { getAllUsers, registerUser } = require("../controllers/user.js");

router.get("/allUsers", getAllUsers);
router.post("/newUser", registerUser);

module.exports = router;
