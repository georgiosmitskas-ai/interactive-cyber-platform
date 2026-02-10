// src/pages/InfoPage.jsx
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./HubPage.css";

function InfoPage() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const c =
      typeof window !== "undefined" &&
      window.localStorage.getItem("icsa_consent") === "true";
    setHasConsent(c);
  }, []);

  if (hasConsent) {
    // User already consented – don’t show info again
    return <Navigate to="/platform" replace />;
  }

  const handleContinue = () => {
    navigate("/consent");
  };

  return (
    <div className="page-root">
      <div className="content-card wide">
        <h1>Participant Information – Plain Language Statement</h1>

        <div className="document-text">
          {/* 
            IMPORTANT:
            Copy–paste the full text from your
            "Plain language statement" document here,
            WITHOUT changing the wording.
            Use <p> for paragraphs and <ul>/<li> for lists if needed.
          */}

          <p><strong>Plain Language Statement Information Sheet</strong></p>

<p><strong>School:</strong> School of Computing</p>

<p><strong>Project Title:</strong> Interactive Cybersecurity Awareness Platform</p>

<p><strong>Computing Hons Project Student:</strong> Georgios Mitskas<br />
<strong>Email address:</strong> b01732443@studentmail.uws.ac.uk</p>

<p><strong>Computing Hons Project Supervisor:</strong> Dr Raman Singh<br />
<strong>Email address:</strong> Raman.Singh@uws.ac.uk<br />
<strong>Contact number:</strong> Not applicable</p>

<p><strong>Computing Hons Project Module Coordinator:</strong> Dr Jacob Koenig<br />
<strong>Email address:</strong> Jacob.Koenig@uws.ac.uk<br />
<strong>Contact number:</strong> Not applicable</p>

<p><strong>Programme Title:</strong> BSc (Hons) in Cyber Security</p>

<p>Dear participant,</p>

<p>
You are being invited to take part in my research study titled
“Interactive Cybersecurity Awareness Platform”.
Before you decide whether to take part, it is important for you to
understand why the research is being carried out and what your
participation will involve.
</p>

<p>
Please take time to read the following information carefully and
discuss it with others if you wish. If there is anything that is not
clear or if you would like more information, please ask. You are free
to take as much time as you need before deciding whether to take part.
Thank you for reading this information.
</p>

<p><strong>What is the purpose of the study?</strong></p>

<p>
The purpose of this study is to design, develop, and evaluate an
interactive cybersecurity awareness platform that aims to improve
users’ understanding of common cybersecurity topics.
</p>

<p>
The platform uses short, browser-based educational games to help users
learn about:
</p>

<ul>
  <li>creating strong and secure passwords, and</li>
  <li>recognising safe and suspicious websites or links (phishing).</li>
</ul>

<p>The study evaluates both:</p>

<ul>
  <li>learning outcomes, using short pre- and post-tests, and</li>
  <li>usability, using a standard usability questionnaire.</li>
</ul>

<p><strong>Why have I been chosen?</strong></p>

<p>
You have been invited to take part because you are an adult
(18 years or older) who is willing to try an online educational
platform and provide feedback on your experience.
</p>

<p>
No specialist knowledge of cybersecurity is required. The platform is
designed for general users with different levels of experience.
</p>

<p><strong>Do I have to take part?</strong></p>

<p>
No. Taking part in this study is entirely voluntary.
</p>

<p>
If you decide to take part, you will be asked to give your consent
before using the platform. You are free to withdraw at any time by
closing your browser, without giving a reason.
</p>

<p>
A decision not to take part, or to withdraw, will not affect you in any
way.
</p>

<p><strong>What will happen to me if I take part?</strong></p>

<p>If you agree to take part, you will be asked to:</p>

<ul>
  <li>Read and agree to a consent screen on the platform</li>
  <li>Enter a self-chosen nickname and select an age group (18+)</li>
  <li>Complete a short pre-test</li>
  <li>Play two short educational games:
    <ul>
      <li>Password Hygiene Runner</li>
      <li>Safe Surfer – URL &amp; Safe Browsing</li>
    </ul>
  </li>
  <li>Complete a short post-test</li>
  <li>Complete an evaluation questionnaire</li>
</ul>

<p>
The entire process will take approximately 15–20 minutes.
</p>

<p><strong>Will my taking part in this study be kept confidential?</strong></p>

<p>
Yes. All information collected during the study will be kept strictly
confidential.
</p>

<ul>
  <li>You will not be asked to provide your name or contact details</li>
  <li>Participants are identified only by age group</li>
  <li>All identifiable information is removed so that individuals cannot be recognised</li>
  <li>Data will be analysed and reported in an anonymous and aggregated form</li>
</ul>

<p><strong>What will happen to the results of the research study?</strong></p>

<p>
The results of this study will be used as part of the student’s Honours
Project dissertation and may be included in academic reports or
presentations.
</p>

<p>
A bound copy of the completed Hons Project report may be stored at the
University of the West of Scotland library (subject to approval).
</p>

<p>
No individual participant will be identifiable in any published work.
</p>

<p><strong>Who is organising the research?</strong></p>

<p>
The School of Computing at the University of the West of Scotland is
organising this Computing Hons Project.
</p>

<p><strong>Who has reviewed the study?</strong></p>

<p>
The project will be reviewed through the University of the West of
Scotland Ethical Review Manager (ERM) system and by the student’s
academic supervisor to ensure it meets ethical research standards.
</p>

<p><strong>Contact for Further Information</strong></p>

<p>
For further information, please contact:
</p>

<p>
Computing Hons Project Student: Georgios Mitskas<br />
Email address: b01732443@studentmail.uws.ac.uk
</p>

<p>
Alternatively, if participants have any concerns regarding the conduct
of the research project, please contact the School of Computing,
Engineering and Physical Sciences Ethics Committee Chair by contacting
Dr John Hughes – john.hughes@uws.ac.uk.
</p>

<p>
Thank you for taking part in this study.
</p>

<p>
If you have any queries or concerns relating to the research being
undertaken, please contact:
</p>

<p>
Dr Jacob Koenig<br />
School of Computing<br />
University of the West of Scotland<br />
High Street<br />
Paisley<br />
PA1 2BE<br />
Email: Jacob.Koenig@uws.ac.uk
</p>

        </div>

        <div className="consent-actions">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            <span>
              I confirm that I have read and understood the Participant
              Information / Plain Language Statement.
            </span>
          </label>

          <button
            className="primary-button"
            onClick={handleContinue}
            disabled={!confirmed}
          >
            I have read this – continue to consent
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
