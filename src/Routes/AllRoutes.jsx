import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { Project } from "../Pages/Project";
import { Resume } from "../Pages/Resume";
import { Skills } from "../Pages/Skills";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </div>
  );
};
