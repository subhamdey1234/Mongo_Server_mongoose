import mongoose from "mongoose";
import model from "./Model.js";
import fs from "fs";

const productjson = JSON.parse(fs.readFileSync("./sample.json", "utf-8"));

const mongourl = "mongodb://localhost:27017/nodeA6";

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Server is connected Successfully..."))
  .catch((err) => console.log("Error:", err));

const start = async () => {
  try {
    await model.create(productjson.groceries); 
    console.log("Success");
    mongoose.connection.close(); 
  } catch (err) {
    console.log(err);
    mongoose.connection.close();
  }
};

start();
