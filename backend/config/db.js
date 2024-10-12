import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect(
      "mongodb+srv://ayush9966:INCORRECT9966@cluster0.2vpyd.mongodb.net/food-del"
    ).then(() => console.log("Db Connectd")
    );
}