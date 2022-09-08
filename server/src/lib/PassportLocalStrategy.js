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
      const { name, lastName, email } = req.body;
      const user = {
        username,
        password: await HelpersCrypt.encryptPassword(password),
        name,
        lastName,
        email,
      };
      await pool.query("INSERT INTO users SET ?", [user]);
      return done(null, user)
    }
  )
);

passport.serializeUser((usr, done)=>{
  
})
