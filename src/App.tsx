import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  // Navigate,
} from "react-router-dom";
import { Profile } from "./components/views";

import "./App.css";

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
