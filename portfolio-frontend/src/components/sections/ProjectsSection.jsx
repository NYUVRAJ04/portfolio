import { useState } from "react";
import ApiStatus from "../ApiStatus";
import useApiData from "../../hooks/useApiData";
import { getProjects, getProjectById } from "../../service/projectService";
import { getApiErrorMessage } from "../../api/response";

function ProjectsSection() {
  const { data: projects, loading, error, retry } = useApiData(getProjects, []);
  const [details, setDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState({});
  const [detailErrors, setDetailErrors] = useState({});

  const loadDetails = async (projectId) => {
    setLoadingDetails((current) => ({ ...current, [projectId]: true }));
    setDetailErrors((current) => ({ ...current, [projectId]: "" }));
    try {
      const detail = await getProjectById(projectId);
      setDetails((current) => ({ ...current, [projectId]: detail }));
    } catch (requestError) {
      setDetailErrors((current) => ({
        ...current,
        [projectId]: getApiErrorMessage(requestError),
      }));
    } finally {
      setLoadingDetails((current) => ({ ...current, [projectId]: false }));
    }
  };

  const toggleDetails = (projectId) => {
    if (!details[projectId] && !loadingDetails[projectId]) {
      loadDetails(projectId);
    } else if (details[projectId]) {
      setDetails((current) => {
        const next = { ...current };
        delete next[projectId];
        return next;
      });
    }
  };

  return (
    <section id="projects" className="race-section">
      <div className="section-inner">
        <span className="section-kicker">SECTOR 03 · PROJECTS</span>
        <h2>PROJECTS</h2>
        <ApiStatus loading={loading} error={error} retry={retry} empty={!projects.length} />
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <span>{project.category} · {project.status}</span>
              <h3>{project.name}</h3>
              {project.raceName && <p>{project.raceName}</p>}
              <p>{project.description}</p>
              {project.technologies?.length > 0 && (
                <div>
                  {project.technologies.map((technology) => (
                    <span className="technology" key={technology}>{technology}</span>
                  ))}
                </div>
              )}
              <div className="project-links">
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}
              </div>
              <button
                className="project-card-button"
                type="button"
                onClick={() => toggleDetails(project.id)}
                disabled={loadingDetails[project.id]}
              >
                {loadingDetails[project.id]
                  ? "Loading..."
                  : details[project.id]
                    ? "Hide details"
                    : "Full project details"}
              </button>
              {detailErrors[project.id] && (
                <div role="alert">
                  <p>{detailErrors[project.id]}</p>
                  <button className="project-card-button" type="button" onClick={() => loadDetails(project.id)}>
                    Retry
                  </button>
                </div>
              )}
              {details[project.id] && (
                <div className="project-details">
                  <h4>Problem</h4>
                  <p>{details[project.id].problem}</p>
                  <h4>Solution</h4>
                  <p>{details[project.id].solution}</p>
                  {details[project.id].features?.length > 0 && (
                    <>
                      <h4>Features</h4>
                      <ul>{details[project.id].features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    </>
                  )}
                  {details[project.id].outcomes?.length > 0 && (
                    <>
                      <h4>Outcomes</h4>
                      <ul>{details[project.id].outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                    </>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
