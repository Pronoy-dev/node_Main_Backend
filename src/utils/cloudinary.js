const cloudinary = require("cloudinary").v2;
const fs = require("fs");
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const uploadFileCloudinary = async (localFilePath) => {
  try {
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload(localFilePath);
    if (uploadResult) {
      fs.unlinkSync(localFilePath);
    }
    return uploadResult;
  } catch (error) {
    console.log("Error from uploadFileCloudinary method", error);
  }
};

module.exports = { uploadFileCloudinary };
