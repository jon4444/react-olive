// handling requests related to food items
import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {

  console.log('Request body:', req.body); 
  console.log('Uploaded file:', req.file);

  if (!req.body.name) {
    return res.json({success: false, message:'Name is required'});
  }


  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    // find the food item by ID
    if (!food) {
      return res.status(404).json({success: false, message:"Food item not found"});
    }
    // remove the image file associated with the food item
    fs.unlink(`uploads/${food.image}`, ()=>{})

    // delete the food item from the database
    await foodModel.findByIdAndDelete(req.body.id);
    // send a success response
    res.json({success:true, message:"Food Removed"});
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error removing food item"});
  }
}

export { addFood, listFood, removeFood};
// Sends a JSON response with the list of food items.