import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            dbName: "My_MERN_APP",
        }
        await mongoose.connect(DATABASE_URL, DB_OPTION)
        console.log("database connected successfully")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;