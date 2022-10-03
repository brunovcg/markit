import axios from "axios";

const settings = {
  baseUrl: "localhost:8000/",
};

export const api = () => {
  return axios.create({ baseURL: settings.baseUrl });
};
