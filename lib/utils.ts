import mongoose from "mongoose"

const connection :any = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO!);
    connection.isConnected = db.connections[0].readyState;
  } catch (error:any) {
    console.log(error);
    throw new Error(error);
  }
}