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

const getProjectsPaginated = async (limit: number, page: number) => {
  try {
    //console.log(`${API_PATH}/projects${limit ? `/${limit}` : ""}`);
    const response = await axios.get(
      `${API_PATH}/projects/page/${page}/limit/${limit}`
    );
    return response;
  } catch (error) {
    console.error("Error getting projects:", error);
    return null;
  }
};


const projectAction = async(id: number, action: string) => {
  try {
    const response = await axios.post(
      `${API_PATH}/stats/projects`, {id:id, action:action}
    );
    return response;
  } catch (error) {
    console.error("Error updating project stats:", error);
    return null;
  }
}

export { postUserMessage, getProjects, getProjectsPaginated, projectAction };
