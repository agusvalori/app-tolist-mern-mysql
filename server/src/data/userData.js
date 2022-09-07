const iniciarSesionUsuario =  (req, res) => {  
  console.log(req.body)
  
  res.send("Iniciando sesion")
};

const registrarUsuario = async (req, res) => {};

const eliminarUsuario = async (req, res) => {};

const editarUsuario = async (req, res) => {};

export {
  
  iniciarSesionUsuario,
  registrarUsuario,
  eliminarUsuario,
  editarUsuario,
};
