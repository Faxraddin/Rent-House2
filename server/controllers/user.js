const Users = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { sign, verify } = jwt;

const getAllUsers = async (_req, res) => {
  try {
    const data = await Users.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// export const getUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await Users.findById(id);
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ message: error });
//   }
// };

// export const deleteUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await Users.findByIdAndDelete(id);
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send({ message: error });
//   }
// };

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new Users({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    const { password, ...data } = result.toJSON();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

// const makeAdmin = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await Users.findById(id);
//     user.isAdmin = true;
//     await user.save();
//     res.status(200).send({ message: "SUCCESS" });
//   } catch (error) {
//     res.status(500).send({ message: error });
//   }
// };

// const removeAdmin = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await Users.findById(id);
//     user.isAdmin = false;
//     await user.save();
//     res.status(200).send({ message: "SUCCESS" });
//   } catch (error) {
//     res.status(500).send({ message: error });
//   }
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await Users.findOne({ email: email });
//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }
//     if (!(await bcrypt.compare(password, user.password))) {
//       return res.status(400).send({ message: "Invalid credentials" });
//     }
//     const token = sign({ _id: user._id }, process.env.SECRET_KEY);
//     res.cookie("jwt", token, {
//       withCredentials: true,
//       maxAge: 24 * 60 * 60 * 1000, // 1 day
//     });
//     res.status(200).send({ message: "SUCCESS" });
//   } catch (error) {
//     res.status(500).send({ message: error });
//   }
// };

// const authUser = async (req, res) => {
//   try {
//     const cookie = req.cookies["jwt"];
//     const claims = verify(cookie, process.env.SECRET_KEY);
//     if (!claims) {
//       return res.status(401).send({ message: "unauthenticated" });
//     }
//     const user = await Users.findOne({ _id: claims._id });
//     const { password, ...data } = user.toJSON();
//     res.status(200).send(data);
//   } catch (error) {
//     return res.status(401).send({ message: "unauthenticated" });
//   }
// };

module.exports = { getAllUsers: getAllUsers, registerUser: registerUser };
