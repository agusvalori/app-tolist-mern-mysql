import passport from "passport";
import { Strategy } from "passport-local";
import { pool } from "../data/db.js";
import { HelpersCrypt } from "./HelpersCrypt.js";

passport.use(
    new Strategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, username, password, done) => {      
        const {name, lastName, email} = req.body;
        const user = {
          username,
          password,
          name,
          lastName,
          email
        };

        const result = await HelpersCrypt.encryptPassword(password)
        console.log(result)
        console.log(result.length)
        //await pool.query("INSERT INTO users SET ?",[user])        
      }
    )
  );