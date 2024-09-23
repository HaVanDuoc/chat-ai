// routes/messageRouter.ts
import { Router } from "express";
import messageControllers from "~/controllers/message";

const messageRouter = Router();

messageRouter.post("/create", messageControllers.createNewMessage); // Create a new message
// messageRouter.get("/:id", messageControllers.getMessage);       // Get message by ID
// messageRouter.get("/", messageControllers.getAllMessages);          // Get all messages
messageRouter.put("/:id", messageControllers.updateMessage);        // Update message by ID
messageRouter.delete("/:id", messageControllers.deleteMessage);      // Delete message by ID

export default messageRouter;
