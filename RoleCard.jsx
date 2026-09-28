export default function RoleCard({ role, selected, onSelect }) {
  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => onSelect(role.title)}
    >
      <div className="emoji">{role.icon}</div>

      <h3>{role.title}</h3>

      <p>{role.skills}</p>

      <button className={selected ? "selected-btn" : ""}>
        {selected ? "Selected ✓" : "Select Role"}
      </button>
    </div>
  );
}