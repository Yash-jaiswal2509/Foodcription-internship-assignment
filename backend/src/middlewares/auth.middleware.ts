import { User } from "../models/user.model";
import { apiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

declare module "express" {
  interface Request {
    user?: any;
  }
}

export const verifyJwt = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) {
        throw new apiError(401, "Unauthorized request");
      }

      const decodedToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as Secret
      ) as JwtPayload;

      const user = await User.findById(decodedToken?._id).select("-password");

      if (!user) {
        throw new apiError(401, "Invalid access token");
      }

      req.user = user;
      next();
    } catch (error) {
      throw new apiError(401, (error as string) || "Invalid access token");
    }
  }
);
