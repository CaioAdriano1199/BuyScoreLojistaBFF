// mock-api.js
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint simulado de login
app.post("/auth/login", (req, res) => {
  const { email, senha } = req.body;

  if (email === "teste@email.com" && senha === "123456") {
    return res.json({
      token: "fake-jwt-token-123456",
      usuario: {
        id: 1,
        nome: "Usuário de Teste",
        email,
      },
    });
  }

  return res.status(401).json({
    mensagem: "Credenciais inválidas",
  });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Mock API rodando em http://localhost:${PORT}`);
});
