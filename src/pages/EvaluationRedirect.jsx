// src/pages/EvaluationRedirect.jsx
import { useEffect } from "react";
import "./HubPage.css";

const EVALUATION_URL = "https://forms.gle/YqsXdiLMbYkHbaVv8";

function EvaluationRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = EVALUATION_URL;
    }
  }, []);

  return (
    <div className="page-root">
      <div className="content-card">
        <h1>Evaluation Questionnaire</h1>
        <p>
          You are being redirected to the online evaluation form. If you are
          not redirected automatically, please{" "}
          <a href={EVALUATION_URL} target="_blank" rel="noreferrer">
            click here to open the questionnaire
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default EvaluationRedirect;
