import { Link } from "react-router-dom";

export default function GamePage() {
  return (
    <div className="game-page">
      <h1>Game 1: Password Hygiene Runner</h1>

      <iframe
        src="https://playcanv.as/p/yA6QFnkK/"
        title="Password Hygiene Runner"
        allow="fullscreen"
      />

      <Link to="/" className="btn">
        Return to Platform
      </Link>
    </div>
  );
}
