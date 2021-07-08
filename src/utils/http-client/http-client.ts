import axios from "axios";
import { API_SERVICE_URL } from "../../config";

const headers = {
  "Content-Type": "application/json"
};

export class HttpClient {
  get = async (path: string) => {
    const { data } = await axios.get(`${API_SERVICE_URL}/${path}`, { headers });
    return data;
  };
}
