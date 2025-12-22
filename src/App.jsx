import { BrowserRouter, Routes, Route } from "react-router-dom";
import HubPage from "./pages/HubPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
