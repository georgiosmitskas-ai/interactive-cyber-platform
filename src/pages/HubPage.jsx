import { Link } from "react-router-dom";

export default function HubPage() {
  return (
    <div className="hub">
      <h1>Interactive Cybersecurity Awareness Platform</h1>

      <section>
        <h2>Game 1: Password Hygiene Runner</h2>
        <p>A runner-style game focused on password hygiene.</p>

        <Link to="/game/1" className="btn">
          Start Game
        </Link>
      </section>
    </div>
  );
}