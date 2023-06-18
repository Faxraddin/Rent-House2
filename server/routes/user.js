const express = require("express");
const router = express.Router();
const { register,login, getAllUsers,update,getUserById} = require("../controllers/user.js");

router.post("/register", register);
router.post("/login", login);

router.get('/users', getAllUsers); // Route to get all users
router.post('/users/:id', update); // Route to update user information
router.get('/users/:id', getUserById);


module.exports = router;
