import { Routes, Route } from "react-router-dom";
import HubPage from "./pages/HubPage";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HubPage />} />
      <Route path="/game/1" element={<GamePage />} />
    </Routes>
  );
}

export default App;
