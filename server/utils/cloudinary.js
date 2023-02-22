require("dotenv").config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dz7pivxws",
  api_key: "225391195631665",
  api_secret: "6KuMWMXLN7IoWhGk-buC4jz5kzg",
});

module.exports = {
  cloudinary,
};
