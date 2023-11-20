import React from "react";
import {
  MainLayoutPage,
  HomePage,
  AboutPage,
  StackPage,
  ProjectPage,
  ContactPage,
} from "./pages";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayoutPage />}>
          <Route index element={<Navigate to={"/home"} />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="stack" element={<StackPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
