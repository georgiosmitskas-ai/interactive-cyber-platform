import { useNavigate } from "react-router-dom";
import "./HubPage.css";

function HubPage() {
  const navigate = useNavigate();

  return (
    <div className="page-root">
      <header className="hero">
        <h1>Interactive Cybersecurity Awareness Platform</h1>
        <p className="hero-subtitle">
          Please complete Game 1, then Game 2, then the Evaluation form at the end.
        </p>
      </header>

      <main className="hub-layout">
        <section className="info-panel">
          <p>
            This platform supports cybersecurity learning through short interactive activities. Each game includes a brief
            pre-test and post-test to measure knowledge change. The games are designed to provide immediate feedback and
            reinforce safe behaviours in a low-pressure environment.
          </p>
          <p>
            Recommended order:
            <strong> Game 1 (Passwords)</strong> → <strong>Game 2 (Safe Browsing)</strong> → <strong>Evaluation</strong>.
            Completing all three steps helps provide a complete set of results for the study.
          </p>
        </section>

        <section className="cards-row">
          <div className="hub-card">
            <h2>Game 1: Password Hygiene Runner</h2>
            <p>
              Learn how to build stronger passwords by identifying secure password features and avoiding weak choices.
              You will complete a short pre-test, play the game, then complete a short post-test.
            </p>
            <button className="primary-button" onClick={() => navigate("/game/1")}>
              Start Game 1
            </button>
          </div>

          <div className="hub-card">
            <h2>Game 2: Safe Surfer – Internet Adventure</h2>
            <p>
              Practise recognising safe and suspicious websites by checking URLs and link patterns.
              You will complete a short pre-test, play the game, then complete a short post-test.
            </p>
            <button className="primary-button" onClick={() => navigate("/game/2")}>
              Start Game 2
            </button>
          </div>

          <div className="hub-card">
            <h2>Evaluation (Final Step)</h2>
            <p>
              After completing both games, please complete the evaluation questionnaire. This collects feedback about
              usability and your overall experience with the platform.
            </p>
            <button className="primary-button" onClick={() => navigate("/evaluation")}>
              Start Evaluation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HubPage;
