import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import Profile from "./components/pages/Profile";
import SearchUserByUsername from "./components/pages/SearchUserByUsername";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchUserByUsername />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
