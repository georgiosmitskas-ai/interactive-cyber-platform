import "./HubPage.css";

function HubPage() {
  return (
    <div className="hub">
      {/* Header */}
      <header className="hub-header">
        <h1>Interactive Cybersecurity Awareness Platform</h1>
        <p>BEng Cyber Security Honours Project</p>
      </header>

      {/* Instructions */}
      <section className="hub-card">
        <h2>Instructions</h2>
        <ol>
          <li>Enter your name and age group in the game.</li>
          <li>Complete the pre-test.</li>
          <li>Play the cybersecurity game.</li>
          <li>Complete the post-test.</li>
        </ol>
        <p className="muted">
          All responses are anonymous and used only for academic evaluation.
        </p>
      </section>

      {/* Games */}
      <section className="hub-card">
        <h2>Available Games</h2>

        {/* Game 1 */}
        <div className="game-card">
          <div>
            <h3>Game 1: Password Hygiene Runner</h3>
            <p>
              A runner-style game focused on password hygiene, reuse risks,
              and secure behaviour.
            </p>
          </div>

          <a
            href="https://playcanv.as/p/yA6QFnkK/"
            target="_blank"
            rel="noopener noreferrer"
            className="play-button"
          >
            Launch Game
          </a>
        </div>

        {/* Game 2 placeholder */}
        <div className="game-card disabled">
          <div>
            <h3>Game 2: Phishing Awareness (Coming Soon)</h3>
            <p>
              Scenario-based phishing detection and decision-making.
            </p>
          </div>

          <button disabled className="play-button disabled-btn">
            Coming Soon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="hub-footer">
        Georgios Mitskas – Interactive Cybersecurity Awareness Platform
      </footer>
    </div>
  );
}

export default HubPage;
