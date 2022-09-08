import { Router } from "express";
import { iniciarSesionUsuario, registrarUsuario } from "../data/userData.js";

const userRoutes = Router();

userRoutes.get('/login',(req,res)=>{
    res.send("Ingrese user y pass")
})

userRoutes.post("/login",iniciarSesionUsuario)

userRoutes.post("/signup", registrarUsuario)

userRoutes.get('/profile',(req,res)=>{   
    //Si ya iniciamos session 
    res.send("Bienvenido: Ya iniciaste session")
    //si no iniciamos session redireccionamos a /login
})

export {userRoutes}