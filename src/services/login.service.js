import axios from "axios";

// URL da sua API real
const API_URL = "Aqui vai a URL da API"; // coloque a URL real da sua API

export const loginService = async (email, senha) => {
  try {
    const response = await axios.post(API_URL, { email, senha });

    // Retorna apenas o que o front precisa
    return {
      token: response.data.token,
      usuario: response.data.usuario || null,
    };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};
