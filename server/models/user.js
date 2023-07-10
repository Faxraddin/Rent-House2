const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about:{type:String},
    work:{type:String},
    interest:{type:String},
    region:{type:String},
    age:{type:Number},
  },
  { timestamps: true }
);

const announcementSchema = new mongoose.Schema(
  {
    description: { type: String, },
  },
  { timestamps: true }
);

const announcementModel = mongoose.model("Announcement", announcementSchema);

const userModel = mongoose.model("Users", userSchema);

module.exports = {userModel:userModel,announcementModel:announcementModel}
