import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Interactive Cybersecurity Awareness Platform</h1>
        <p>Game 1: Password Hygiene Runner</p>
      </header>

      <main className="main">
        <section className="intro">
          <h2>Instructions</h2>
          <ol>
            <li>Enter your name and age group.</li>
            <li>Complete the pre-test.</li>
            <li>Play the runner game.</li>
            <li>Complete the post-test.</li>
          </ol>
          <p>
            Your responses are anonymous and used only for this Honours Project
            evaluation.
          </p>
        </section>

        <section className="game">
          <h2>Play the Game</h2>

          <div className="iframe-wrapper">
            <iframe
              src="https://playcanv.as/p/yA6QFnkK/"
              title="Password Hygiene Runner"
              allow="fullscreen; gamepad"
              frameBorder="0"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          BEng Cyber Security Honours Project – Georgios Mitskas
        </p>
      </footer>
    </div>
  );
}

export default App;
