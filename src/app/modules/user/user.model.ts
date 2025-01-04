import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: { type: String, required: true },
    email: { type: String },
    contactNo: { type: String },
    emergencyContactNo: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },
  });
   const User = model<IUser>("User", userSchema);

   export default User;