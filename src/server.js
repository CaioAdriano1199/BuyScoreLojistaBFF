import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use("/login", loginRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`BFF rodando na porta ${PORT}`);
});
