// routes/userRouter.ts
import { Router } from "express";
import userControllers from "~/controllers/user";

const userRouter = Router();

userRouter.post("/create", userControllers.createNewUser);    // Create a new user
userRouter.get("/:id", userControllers.getUserById);          // Get user by ID
userRouter.get("/", userControllers.getAllUsers);             // Get all users
userRouter.put("/:id", userControllers.updateUser);           // Update user by ID
userRouter.delete("/:id", userControllers.deleteUser);        // Delete user by ID

export default userRouter;
