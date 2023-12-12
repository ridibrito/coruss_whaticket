import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export const openApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export default api;

export async function postFunction() {
  const response = await axios({
    method: "POST",
    url: "https://n8n.coruss.com.br/webhook-test/ee414d66-4f40-4bbe-a27f-eeba0d07161d",
    data: {
      nome: "Coruss",
      email: "ricardo.brasiliadf@hotmail.com",
      cpf: 72741325120,
      telefone: "61983555195",
      plano: "Coruss Lite"
    }
  });
  return response.data;
}
