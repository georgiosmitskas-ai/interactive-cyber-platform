// src/pages/ConsentPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./HubPage.css";

function ConsentPage() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const c =
      typeof window !== "undefined" &&
      window.localStorage.getItem("icsa_consent") === "true";
    setHasConsent(c);
  }, []);

  if (hasConsent) {
    return <Navigate to="/platform" replace />;
  }

  const handleAgree = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("icsa_consent", "true");
    }
    navigate("/platform");
  };

  const handleBack = () => {
    navigate("/info");
  };

  return (
    <div className="page-root">
      <div className="content-card wide">
        <h1>Participant Consent Form</h1>

        <div className="document-text">
          {/* 
            IMPORTANT:
            Copy–paste the full text from your
            "Participant Consent Approval Form" document here,
            WITHOUT changing the wording.
          */}

          <p><strong>School of Computing, Engineering and Physical Sciences</strong></p>

<p><strong>PARTICIPANT CONSENT FORM</strong></p>

<p><strong>Title of Project:</strong> Interactive Cybersecurity Awareness Platform</p>

<p><strong>Name of Researcher:</strong> Georgios Mitskas</p>


<ul>
<li>I confirm that I have read and understand the Plain Language Statement
for the above study and have had the opportunity to ask questions.</li>



<li>I understand that my participation is voluntary and that I am free to
withdraw at any time, without giving any reason.</li>



<li>I understand that I will be asked questions and my responses will be
recorded, but that I will not be identified by name in any resulting
published work.</li>


<p>
<li>I confirm that I am 18 years of age or older.</li>
</p>

<p>
<li>I agree to take part in the above study.</li>
</p>
</ul>
<p><strong>Consent Declaration</strong></p>

<p>
Consent for this study is obtained electronically.
</p>

<p>
By selecting “I Agree – Continue” on the platform’s consent screen, the
participant confirms that they have read the Plain Language Statement
and consent to take part in this study.
</p>

<p>
No written signatures are collected.
</p>

<p>
<strong>I agree to take part in this study</strong>
</p>

        </div>

        <div className="consent-actions">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I confirm that I am 18 or older and I agree to take part in this
              study.
            </span>
          </label>

          <div className="button-row">
            <button className="secondary-button" onClick={handleBack}>
              Back to Information
            </button>
            <button
              className="primary-button"
              onClick={handleAgree}
              disabled={!agreed}
            >
              I Agree – Continue to Platform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsentPage;
