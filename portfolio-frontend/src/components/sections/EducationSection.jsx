import ApiStatus from "../ApiStatus";
import useApiData from "../../hooks/useApiData";
import { getEducation } from "../../service/educationService";

function EducationSection() {
  const { data: education, loading, error, retry } = useApiData(getEducation, []);

  return (
    <section id="education" className="race-section">
      <div className="section-inner">
        <span className="section-kicker">SECTOR 04 · ACADEMY</span>
        <h2>ACADEMY</h2>
        <ApiStatus loading={loading} error={error} retry={retry} empty={!education.length} />
        <div className="career-list">
          {education.map((item) => (
            <article className="career-card" key={item.id}>
              <span>
                {item.startDate ? new Date(item.startDate).getFullYear() : ""}
                {" — "}
                {item.endDate ? new Date(item.endDate).getFullYear() : "PRESENT"}
              </span>
              <h3>{item.degree} · {item.field}</h3>
              <strong>{item.institution}</strong>
              {item.grade && <p>Grade: {item.grade}</p>}
              {item.description && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
