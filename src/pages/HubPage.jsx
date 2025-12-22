import "./HubPage.css";

function HubPage() {
  return (
    <div className="hub">

      <h1 className="title">
        Interactive Cybersecurity Awareness Platform
      </h1>
      <p className="subtitle">
        BEng Cyber Security Honours Project
      </p>

      <section className="card">
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

      <section className="card">
        <h2>Available Games</h2>

        <div className="game">
          <div>
            <h3>Game 1: Password Hygiene Runner</h3>
            <p>
              A runner-style game focused on strong passwords, reuse risks,
              and secure behaviour.
            </p>
          </div>

          <a
            href="https://playcanv.as/p/yA6QFnkK/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Start Game
          </a>
        </div>

        <div className="game disabled">
          <div>
            <h3>Game 2: Phishing Awareness Challenge</h3>
            <p>
              Identify phishing emails and social engineering attacks.
            </p>
          </div>

          <button disabled className="button disabled-btn">
            Coming Soon
          </button>
        </div>
      </section>

      <footer className="footer">
        Georgios Mitskas – Interactive Cybersecurity Awareness Platform
      </footer>

    </div>
  );
}

export default HubPage;
