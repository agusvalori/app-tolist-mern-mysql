import { Router } from "express";
import { iniciarSesionUsuario } from "../data/userData.js";

const userRoutes = Router();

userRoutes.get("/login",(req, res)=>{
    res.send("Welcome to the login web")
})
userRoutes.post("/login",iniciarSesionUsuario)

export {userRoutes}