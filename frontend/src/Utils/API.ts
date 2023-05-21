import axios from "axios";
import { UserMessageType } from "./Types";

const postUserMessage = async (message: UserMessageType) => {
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    await api.post("http://localhost:8000/api/contact", message);
    return true;
  } catch (error) {
    console.error("Error posting user message:", error);
    return false;
  }
};

export { postUserMessage };
