// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import InfoPage from "./pages/InfoPage";
import ConsentPage from "./pages/ConsentPage";
import HubPage from "./pages/HubPage";
import GamePage from "./pages/GamePage";
import Game2Page from "./pages/Game2Page";
import EvaluationRedirect from "./pages/EvaluationRedirect";
import "./App.css";

// Small wrapper to block access if consent not given
function RequireConsent({ children }) {
  const hasConsent = typeof window !== "undefined" &&
    window.localStorage.getItem("icsa_consent") === "true";

  if (!hasConsent) {
    return <Navigate to="/info" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      {/* 0. Landing / welcome */}
      <Route path="/" element={<LandingPage />} />

      {/* 1. Plain Language Statement */}
      <Route path="/info" element={<InfoPage />} />

      {/* 2. Consent form */}
      <Route path="/consent" element={<ConsentPage />} />

      {/* 3. Platform home (hub) – protected */}
      <Route
        path="/platform"
        element={
          <RequireConsent>
            <HubPage />
          </RequireConsent>
        }
      />

      {/* 4. Game 1 – protected */}
      <Route
        path="/game/1"
        element={
          <RequireConsent>
            <GamePage />
          </RequireConsent>
        }
      />

      {/* 5. Game 2 – protected */}
      <Route
        path="/game/2"
        element={
          <RequireConsent>
            <Game2Page />
          </RequireConsent>
        }
      />

      {/* 6. Evaluation (external redirect) – protected */}
      <Route
        path="/evaluation"
        element={
          <RequireConsent>
            <EvaluationRedirect />
          </RequireConsent>
        }
      />

      {/* Fallback – anything unknown goes to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
