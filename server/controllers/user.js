const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { sign, verify } = jwt;

const register = async (req, res) => {

  const { fullName, email, password } = req.body;

  try {
    // Check if user with the provided email already exists
    const existingUser = await User.findOne({  email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    if (savedUser) {
      return res.status(200).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ error: "Cannot register a user at the moment" });
  }
  
    
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create and send a JWT token in a cookie
    const token = jwt.sign({ userId: user._id }, "secretKey");
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};

const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, "secretKey");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const getUser = async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById(req.userId).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user data" });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const data = await Users.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { register:register, login:login, logout:logout, authenticate:authenticate, getUser:getUser, getAllUsers:getAllUsers };