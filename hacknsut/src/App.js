import "./App.css";
import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import IdeaValidator from "./screens/IdeaValidator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/validator" element={<IdeaValidator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
