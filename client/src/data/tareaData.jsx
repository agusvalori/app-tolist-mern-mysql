import axios from "axios";

const obtenerTareasRequest = async () => {
  return await axios.get("http://localhost:4000/task");
};

const crearTareasRequest = async (tarea) => {
  return await axios.post("http://localhost:4000/task", tarea);
};

const eliminarTareaRequest = async (id) => {
  return await axios.delete(`http://localhost:4000/task/${id}`);
};

const editarTareaRequest = async (tarea) => {};

export {
  crearTareasRequest,
  obtenerTareasRequest,
  eliminarTareaRequest,
  editarTareaRequest,
};
