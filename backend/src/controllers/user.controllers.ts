import { asyncHandler } from "../utils/asyncHandler";
import { apiResponse } from "../utils/apiResponse";
import { apiError } from "../utils/apiError";
import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserDocument } from "../types/types";
import { body, validationResult } from "express-validator";

const validateUserRegistration = [
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("companyName").notEmpty().withMessage("Company name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
  body("phone").notEmpty().withMessage("Phone number is required"),
  (req: Request, res: Response, next: Function) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const generateToken = async (userId: string) => {
  try {
    const user = (await User.findById(userId)) as UserDocument;

    if (!user) {
      throw new apiError(404, "User not found");
    }

    const accessToken = await user.generateAccessToken();

    await user?.save({ validateBeforeSave: false });
    return { accessToken };
  } catch (error) {
    throw new apiError(500, "Something went wrong while generating tokens");
  }
};

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { fullName, companyName, email, password, phone, roles } = req.body;
  console.log(req.body);

  if (
    [fullName, companyName, email, password, phone].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new apiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    email,
    companyName,
  });

  if (existingUser) {
    throw new apiError(409, "User already exists");
  }

  const user = await User.create({
    fullName,
    companyName,
    email,
    password,
    phone,
    roles,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new apiError(500, "Something went wrong while user registration");
  }

  res
    .status(201)
    .json(new apiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new apiError(400, "Email & password is required");
  }

  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new apiError(404, "User doesn't exists");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new apiError(401, "Invalid user credentials");
  }

  const { accessToken } = await generateToken(user._id as string);

  const loggedInUser = await User.findById(user._id).select("-email -password");

  res
    .status(200)
    .json(
      new apiResponse(
        200,
        { user: loggedInUser, accessToken },
        "User logged in Successfully"
      )
    );
});

export { registerUser, loginUser, validateUserRegistration };
