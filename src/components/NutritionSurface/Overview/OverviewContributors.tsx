import { contributors } from '../data';

const Contributors = () => {
  return (
    <div
      style={{
        marginTop: "14px",
        textAlign: "start",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "28px",
      }}
    >
      <h1 style={{ fontSize: "14px", lineHeight: "28px", fontWeight: 500 }}>Top Contributors</h1>
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        {contributors.map((contributor, index) => (
          <button key={index} style={{ padding: "4px 8px", backgroundColor: "#F1F5F9" }}>
            {contributor}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Contributors