import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    cartData: {type: Object, default:{}}
},{minimize:false})

// If a model named user already exists in mongoose.models. If it does, it uses that existing model.
// If it doesn't exist, it creates a new model called user based on the userSchema.
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;