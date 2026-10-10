function RaceHUD({ activeSection, totalSections }) {
  return (
    <header className="race-hud" aria-label="Race navigation status">
      <div className="race-hud__label">RACE STATUS</div>
      <div className="race-hud__progress">
        <span>
          Sector {String(activeSection + 1).padStart(2, "0")}
        </span>
        <span>
          / {String(totalSections).padStart(2, "0")}
        </span>
      </div>
    </header>
  );
}

export default RaceHUD;
