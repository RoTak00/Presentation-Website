import axios from "axios";
import { UserMessageType } from "./Types";
import { API_PATH } from "./Helpers";

const postUserMessage = async (message: UserMessageType) => {
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    await api.post(`${API_PATH}/contact`, message);
    return true;
  } catch (error) {
    console.error("Error posting user message:", error);
    return false;
  }
};

const getProjects = async (limit?: number) => {
  try {
    //console.log(`${API_PATH}/projects${limit ? `/${limit}` : ""}`);
    const response = await axios.get(
      `${API_PATH}/projects${limit ? `/${limit}` : ""}`
    );
    return response;
  } catch (error) {
    console.error("Error getting projects:", error);
    return null;
  }
};

export { postUserMessage, getProjects };
