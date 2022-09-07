import { createPool } from "mysql2/promise";

/*
 private final String url = "localhost";
    private final String nombreDB = "gestion-inmobiliaria";
    private final String usuario = "root";
    private final String password = "ewqewq321";
*/
export const pool = createPool({
    host:'localhost',
    port:'3306',
    user:"root",
    password:'ewqewq321',
    database:'tolist-mern'
});
