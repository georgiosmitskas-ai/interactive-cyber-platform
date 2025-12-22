function PlayerInfo({ data }) {
  if (!data) return null;

  const {
    name,
    ageGroup,
    preTest,
    gameData,
    postTest,
    results
  } = data;

  return (
    <div style={{
      marginTop: "1.5rem",
      padding: "1.25rem",
      background: "rgba(10, 25, 50, 0.85)",
      borderRadius: "12px"
    }}>
      <h2>Participant Summary</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age group:</strong> {ageGroup}</p>

      <hr style={{ opacity: 0.2 }} />

      <p><strong>Pre-Test score:</strong> {preTest?.score ?? 0}</p>
      <p><strong>Game score:</strong> {gameData?.score ?? 0}</p>
      <p><strong>Post-Test score:</strong> {postTest?.score ?? 0}</p>

      <p>
        <strong>Knowledge improvement:</strong>{" "}
        {results?.knowledgeImprovement ?? 0}
      </p>
    </div>
  );
}

export default PlayerInfo;
