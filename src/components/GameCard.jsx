function GameCard({ title, description, unlocked, completed, onStart }) {
  let statusText = "Locked";
  if (completed) statusText = "Completed";
  else if (unlocked) statusText = "Available";

  return (
    <div style={{
      marginTop: "1rem",
      padding: "1.25rem",
      background: "rgba(10, 25, 50, 0.85)",
      borderRadius: "12px",
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      alignItems: "center"
    }}>
      <div>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: "0.35rem 0 0", opacity: 0.85 }}>{description}</p>
        <p style={{ margin: "0.5rem 0 0", opacity: 0.75 }}>
          Status: {statusText}
        </p>
      </div>

      <div>
        <button
          type="button"
          onClick={onStart}
          disabled={!unlocked || completed}
          style={{
            padding: "0.65rem 1rem",
            borderRadius: "10px",
            border: "none",
            cursor: (!unlocked || completed) ? "not-allowed" : "pointer"
          }}
        >
          {completed ? "Completed" : unlocked ? "Start" : "Locked"}
        </button>
      </div>
    </div>
  );
}

export default GameCard;
