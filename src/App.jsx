import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Task1 from "./pages/Task1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<Task1 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
