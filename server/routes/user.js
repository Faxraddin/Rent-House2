const express = require("express");
const router = express.Router();
const { register,login,getAllUsers } = require("../controllers/user.js");

router.post("/register", register);
router.post("/login", login);
router.get('allUsers',getAllUsers);

module.exports = router;
