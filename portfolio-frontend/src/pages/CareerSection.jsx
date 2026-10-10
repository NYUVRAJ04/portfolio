import { useState } from "react";
import ApiStatus from "../components/ApiStatus";
import useApiData from "../hooks/useApiData";
import { getCareer, getCareerById, getMissions } from "../service/careerService";
import { getApiErrorMessage } from "../api/response";

function ExperienceDetails({ experienceId }) {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDetails = async () => {
    setLoading(true);
    setError("");
    try {
      setDetails(await getCareerById(experienceId));
    } catch (requestError) {
      setError(getApiErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  const toggleDetails = () => {
    if (!expanded && !details) {
      loadDetails();
    }
    setExpanded((value) => !value);
  };

  return (
    <>
      <button className="project-card-button" type="button" onClick={toggleDetails}>
        {expanded ? "Hide details" : "Full experience"}
      </button>
      {expanded && (
        <div className="experience-missions">
          {loading && <p role="status">Loading experience...</p>}
          {error && (
            <div role="alert">
              <p>{error}</p>
              <button className="project-card-button" type="button" onClick={loadDetails}>Retry</button>
            </div>
          )}
          {details?.achievements?.length > 0 && (
            <ul>
              {details.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

function ExperienceMissions({ experienceId }) {
  const [expanded, setExpanded] = useState(false);
  const [missions, setMissions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleMissions = async () => {
    if (expanded) {
      setExpanded(false);
      return;
    }

    setExpanded(true);
    if (missions !== null || loading) {
      return;
    }

    setLoading(true);
    setError("");
    try {
      setMissions(await getMissions(experienceId));
    } catch (requestError) {
      setError(getApiErrorMessage(requestError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="project-card-button" type="button" onClick={toggleMissions}>
        {expanded ? "Hide missions" : "View missions"}
      </button>
      {expanded && (
        <div className="experience-missions">
          {loading && <p role="status">Loading missions...</p>}
          {error && <p role="alert">{error}</p>}
          {missions?.map((mission) => (
            <article key={mission.id}>
              <h4>{mission.title}</h4>
              <p>{mission.description}</p>
              {mission.impact && <p>{mission.impact}</p>}
            </article>
          ))}
          {!loading && !error && missions?.length === 0 && <p>No missions listed.</p>}
        </div>
      )}
    </>
  );
}

function CareerSection() {
  const { data: career, loading, error, retry } = useApiData(getCareer, []);

  return (
    <section
      id="career"
      className="race-section"
    >

      <div className="section-inner">

        <span className="section-kicker">
          SECTOR 01 · CAREER
        </span>

        <h2>
          CAREER
        </h2>

        <ApiStatus loading={loading} error={error} retry={retry} empty={!career.length} />

        <div className="career-list">

          {career.map((experience) => (

            <article
              key={experience.id}
              className="career-card"
            >

              <span>
                {experience.startDate}
                {" — "}
                {experience.endDate ?? "PRESENT"}
              </span>

              <h3>
                {experience.role}
              </h3>

              <strong>
                {experience.company}
              </strong>

              <p>
                {experience.description}
              </p>

              {experience.responsibilities?.length > 0 && (
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              )}

              <div>
                {experience.technologies?.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="technology"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>

              <ExperienceDetails experienceId={experience.id} />
              <ExperienceMissions experienceId={experience.id} />
            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CareerSection;