import { fetchApiAuth } from "./fetchAPI";

const urlPostChatbot = "chat/completions";

export const postChatbot = async (data) => {
  const config = {
    baseURL: "http://172.208.97.136:5000/api/v1/",
    url: urlPostChatbot,
    method: "POST",
    data,
  };
  const res = await fetchApiAuth.request(config);
  return res?.data;
};
