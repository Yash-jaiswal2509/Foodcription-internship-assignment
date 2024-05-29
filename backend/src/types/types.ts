import { Document } from "mongoose";

export interface UserDocument extends Document {
    fullName: string;
    companyName: string;
    email: string;
    password: string;
    phone: string;
    coverImage: string;
    roles: string[];
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): Promise<string>;
  }