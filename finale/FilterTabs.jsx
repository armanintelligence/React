const FILTERS = ["All", "To watch", "Watched"];

function FilterTabs({ filter, onChange }) {
  return (
    <div className="tabs">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={f === filter ? "active" : ""}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
