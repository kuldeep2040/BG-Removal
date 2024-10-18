import mongoose from "mongoose";

const connectDB = async ()=>{

  await mongoose.connect(`${process.env.MONGO_URI}`)
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


  
}
export default connectDB