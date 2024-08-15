import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://john:arsenal4@cluster0.n6ylpcf.mongodb.net/?').then(()=>console.log("DB Connected"));
}