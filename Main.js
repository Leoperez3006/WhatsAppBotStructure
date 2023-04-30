import Conversation from "./Classes/Conversation.js";
import dotenv from "dotenv";
dotenv.config()


const conversation = new Conversation(process.env.PHONE_NUMBER);

conversation.startConversation();
