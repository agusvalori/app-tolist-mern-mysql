import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/taskRoutes.js";

//Inicializaciones
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//Routes
app.use(indexRoutes);
app.use(taskRoutes);

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor inciado en el puerto: ${PORT}`);
});
