import { createContext, useContext, useState } from "react";
import { crearTareasRequest, eliminarTareaRequest, obtenerTareasRequest } from "./tareaData";

const TareaContext = createContext();

const useTasks = () => {
  const context = useContext(TareaContext);
  if (!context) {
    throw new Error("useTasks deveria estar dentro de un TareaContextProvider");
  }
  return context;
};

const TareaContextProvider = (props) => {
  const [tareas, setTareas] = useState([]);

  const obtenerTareas = async () => {
    setTareas([]);
    try {
      const result = await obtenerTareasRequest();
      setTareas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarTareas = async (values, actions) => {
    try {
      await crearTareasRequest(values);
      actions.resetForm();
      obtenerTareas();
    } catch (error) {
      console.log(error);
    }
  };
  const eliminarTareas = async (id) => {
    try {
      if (confirm("Esta seguro de eliminar la tarea")) {
        await eliminarTareaRequest(id);
        obtenerTareas();
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  const editarTareas = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <TareaContext.Provider value={{tareas,setTareas,obtenerTareas, agregarTareas, eliminarTareas,editarTareas}}>
      {props.children}
    </TareaContext.Provider>
  );
};

export { TareaContext, TareaContextProvider, useTasks };
