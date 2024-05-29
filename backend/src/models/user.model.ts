import mongoose, { Model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserDocument } from "../types/types";

interface UserModel extends Model<UserDocument> {}

const userSchema = new mongoose.Schema<UserDocument, UserModel>(
  {
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: [true, "Password is required"] },
    phone: { type: String, required: true, unique: true },
    coverImage: [{ type: String }],
    roles: {
      type: [
        {
          type: String,
          enum: ["candidate", "company"],
        },
      ]
    },
  },
  {
    timestamps: true,
  }
);

// save password as hash
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function (): Promise<string> {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      password: this.password,
      companyName: this.companyName,
      roles: this.roles,
    },
    process.env.ACCESS_TOKEN_SECRET as string,

    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model<UserDocument, UserModel>("User", userSchema);
