import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import { About } from "./components/pages/About";
import { HomePage } from "./components/pages/home/HomePage";
import { NotFound } from "./components/pages/NotFound";
import { TareaLayouy } from "./components/pages/tareas/TareaLayouy";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task" element={<TareaLayouy />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
