import mongoose from "mongoose";

const connectDB = async ()=>{

  const db = mongoose.connection;
  
  db.on("connected", () => {
    console.log("MongoDB Server is connected.");
  });
  db.on("error", () => {
    console.log("MongoDB Server is having error.");
  });
  db.on("disconnected", () => {
    console.log("MongoDB Server is disconnected.");
  });
  
  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)

  
}
export default connectDB