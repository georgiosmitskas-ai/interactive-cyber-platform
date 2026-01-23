import { useNavigate } from "react-router-dom";
import "./HubPage.css";

function Game2Page() {
  const navigate = useNavigate();

  return (
    <div className="page-root">
      <div className="content-card wide">
        <h1>Game 2: Safe Surfer – Internet Adventure</h1>

        <p className="game-description">
          <strong>Instructions:</strong><br />
          1) Enter a nickname (do not use your real name) and select your age group.<br />
          2) Complete the short pre-test questions.<br />
          3) Choose between websites/links and try to avoid suspicious URLs.<br />
          4) Complete the short post-test questions.<br />
          5) When finished, return to the platform and complete the Evaluation form.
        </p>

        <div className="iframe-wrapper">
          <iframe
            title="Game 2 – Safe Surfer"
            src="https://playcanv.as/p/uNchntzG/"
            width="100%"
            height="820"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>

        <div className="button-row">
          <button className="secondary-button" onClick={() => navigate("/platform")}>
            Return to Platform
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game2Page;
