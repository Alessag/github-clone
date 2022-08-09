import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import Profile from "./components/pages/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
