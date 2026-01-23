import { useNavigate } from "react-router-dom";
import "./HubPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="page-root">
      <header className="hero">
        <h1>Interactive Cybersecurity Awareness Platform</h1>

        <p className="hero-subtitle">
          Welcome. This platform helps users improve cybersecurity awareness through short, browser-based mini-games.
        </p>

        <p className="hero-body">
          Cybersecurity awareness matters because many common attacks rely on human mistakes rather than technical hacking.
          Weak passwords, reused credentials, and clicking unsafe links can lead to account takeover, identity fraud, and data loss.
          Small improvements in everyday habits (like choosing stronger passwords and checking links carefully) can significantly
          reduce risk.
        </p>

        <p className="hero-body">
          In this study you will read the participant information, provide consent, then complete Game 1 and Game 2.
          After the games, you will be asked to complete a short evaluation questionnaire about your experience.
          Your responses will be anonymous and used only for academic research as part of an Honours Project in Cyber Security.
        </p>

        <button className="primary-button" onClick={() => navigate("/info")}>
          Read Participant Information
        </button>
      </header>
    </div>
  );
}

export default LandingPage;
