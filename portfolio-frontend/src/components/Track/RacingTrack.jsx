function RacingTrack({ activeIndex }) {
  return (
    <div className="racing-track" aria-label="Racing track indicator">
      <div className="track-lane">
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? "track-dot active" : "track-dot"}
          />
        ))}
      </div>
    </div>
  );
}

export default RacingTrack;
