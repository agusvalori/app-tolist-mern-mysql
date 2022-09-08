import passport from "passport";

const iniciarSesionUsuario = (req, res) => {
  console.log(req.body);

  res.send("Iniciando sesion");
};

const registrarUsuario = passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/signup",
  failureMessage: true,
});
const eliminarUsuario = async (req, res) => {};

const editarUsuario = async (req, res) => {};

export {
  iniciarSesionUsuario,
  registrarUsuario,
  eliminarUsuario,
  editarUsuario,
};
