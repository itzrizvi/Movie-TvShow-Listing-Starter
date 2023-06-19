const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const { basename } = require("path");
const path = require("path");
const baseName = basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config/config.json")[env];
const db = {};

// Function to check MongoDB connection status
function checkMongoDBConnection() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MONGODB CONNECTED");
        resolve();
      })
      .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        reject(err);
      });
  });
}

// Load all Mongoose models from the 'models' folder
readdirSync(path.join(__dirname, "./Models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== baseName &&
      file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, "./Models", file));
    db[model.modelName] = model;
  });

// Export the database object and the checkMongoDBConnection function
module.exports = {
  db,
  checkMongoDBConnection,
};
