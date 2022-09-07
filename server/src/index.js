import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();


//configuraciones
app.use(express.json());
app.use(cors());
/*
app.use(cors({
  origin:'http://localhost:5173',
}))
*/

//routes
app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor inciado en el puerto: ${PORT}`);
});
