import { pool } from "./db.js";

const agregarTarea = async (req, res) => {
  const { title, description, createdAt } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO tareas(title, description, createdAt) VALUES(?,?,?)",
      [title, description, createdAt]
    );
    res.send({ id: result.insertId, title, description, createdAt });
  } catch (error) {
    console.log("Error al obtener la tarea de la bd:\n",error.message);
  }
};

const obtenerTareas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tareas");
    res.send(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const obtenerTareaXId = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query("SELECT * FROM tareas WHERE id=?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "La tarea no existe" });
    }
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editarTarea = async (req, res) => {
  try {
    const tarea = req.body;
    const id = req.params.id;
    const result = await pool.query("UPDATE tareas SET ? WHERE id=?", [
      tarea,
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "La tarea no se pudo editar" });
    }
    res.json({ message: "Tarea editada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const eliminarTarea = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query("DELETE FROM tareas WHERE id=?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "La tarea no se pudo eliminar" });
    }
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  agregarTarea,
  obtenerTareas,
  obtenerTareaXId,
  editarTarea,
  eliminarTarea,
};
