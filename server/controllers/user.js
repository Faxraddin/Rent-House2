const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { use } = require("../routes/user");
dotenv.config();

const { sign, verify } = jwt;

const register = async (req, res) => {

  const { fullName, email, password,interest, region, work, about } = req.body;

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
      interest:'', 
      region:'', 
      work:'', 
      about:'',
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
    } else {
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create and send a JWT token in a cookie
      const token = jwt.sign({ userId: user._id }, "secretKey");
      res.cookie("token", token, { httpOnly: true });

      res.status(200).send({ message: "Login successful" ,user:user,token:token,id:user._id});
    }

    
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find()
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).send({ message: "successful"});
  } catch (err) {
    res.status(500).json({ message: 'Server Error' })
  }
};

const update = async (req,res) => {
  try {
    const userId = req.params.id;
    const { interest, region, work, about,age } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { interest, region, work, about,age },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = { register:register, login:login, getAllUsers:getAllUsers,update:update,getUserById:getUserById };