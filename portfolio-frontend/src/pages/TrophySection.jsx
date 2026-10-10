import ApiStatus from "../components/ApiStatus";
import useApiData from "../hooks/useApiData";
import { getAchievements } from "../service/achievementService";

function TrophySection() {
  const { data: achievements, loading, error, retry } = useApiData(getAchievements, []);

  return (
    <section
      id="trophies"
      className="race-section"
    >

      <div className="section-inner">

        <span className="section-kicker">
          FINAL SECTOR
        </span>

        <h2>
          TROPHY CABINET
        </h2>

        <ApiStatus loading={loading} error={error} retry={retry} empty={!achievements.length} />

        <div className="achievement-grid">

          {achievements.map((achievement) => (

            <article
              key={achievement.id}
              className="achievement-card"
            >

              <div className="achievement-icon">
                {achievement.icon ?? "🏆"}
              </div>

              <h3>
                {achievement.title}
              </h3>

              <p>
                {achievement.description}
              </p>

              <strong>
                +{achievement.xp} XP
              </strong>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrophySection;