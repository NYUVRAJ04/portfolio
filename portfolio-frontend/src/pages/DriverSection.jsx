import ApiStatus from "../components/ApiStatus";
import useApiData from "../hooks/useApiData";
import { getProfile } from "../service/profileService";

function DriverSection() {
  const { data: profile, loading, error, retry } = useApiData(getProfile, null);

  return (
    <section
      id="driver"
      className="race-section driver-section"
    >
      <div className="section-inner">

        <span className="section-kicker">
          DRIVER PROFILE
        </span>

        <ApiStatus loading={loading} error={error} retry={retry} empty={!profile} />

        {profile && (
          <>
        <h1>
          {profile.name}
        </h1>

        <p className="role">
          {profile.title || profile.tagline}
        </p>

        <p className="description">
          {profile.summary}
        </p>

        <p>
          {profile.location}
        </p>

        <button
          className="race-button"
          type="button"
          onClick={() => document.getElementById("career")?.scrollIntoView({ behavior: "smooth" })}
        >
          START RACE →
        </button>
          </>
        )}

      </div>
    </section>
  );
}

export default DriverSection;