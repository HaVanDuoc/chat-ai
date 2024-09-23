import { Router } from "express";
import conversationControllers from "~/controllers/conversation";

const conversationRouter = Router()

conversationRouter.post("/create", conversationControllers.createConversation) // Create new conversation
conversationRouter.delete("/:id", conversationControllers.deleteConversation); // Delete conversation by ID
conversationRouter.put("/:id", conversationControllers.updateConversation); // Update conversation by ID
conversationRouter.get("/:id", conversationControllers.getConversationById); // Get conversation by ID
conversationRouter.get("/", conversationControllers.getAllConversations); // Get all conversations

export default conversationRouter