// src/services/WebhookService.ts
import fetch from "node-fetch";

type AsaasData = {
  name: string;
  cpfCnpj: string;
  email: string;
  phone: string;
  // ... outros campos necessários para o Asaas
};

export const sendWebhook = async (asaasData: AsaasData): Promise<void> => {
  const url = "https://sandbox.asaas.com/api/v3/customers";
  const accessToken =
    "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjgzMDI6OiRhYWNoX2RjMTc4ZDc5LWY1NTktNDlmMy04MWMyLWNlZDNkNGZlMjI1MA==";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      access_token: accessToken
    },
    body: JSON.stringify(asaasData)
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();

    console.log("Resposta da API Asaas:", responseData);
  } catch (error) {
    console.error("Erro ao enviar webhook para o Asaas:", error.message);
    throw new Error("Erro ao enviar webhook para o Asaas");
  }
};
