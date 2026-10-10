import { useCallback, useState } from "react";
import ApiStatus from "../ApiStatus";
import useApiData from "../../hooks/useApiData";
import { getSkills, getSkillsByCategory } from "../../service/skillService";

function GarageSection() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const loadSkills = useCallback(
    async () => {
      const data = category ? await getSkillsByCategory(category) : await getSkills();
      setCategories((current) => [
        ...new Set([...current, ...data.map((skill) => skill.category)]),
      ]);
      return data;
    },
    [category]
  );
  const { data: skills, loading, error, retry } = useApiData(loadSkills, []);

  return (
    <section id="garage" className="race-section">
      <div className="section-inner">
        <span className="section-kicker">SECTOR 02 · GARAGE</span>
        <h2>GARAGE</h2>
        <label className="category-filter">
          Filter by category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All skills</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <ApiStatus loading={loading} error={error} retry={retry} empty={!skills.length} />
        <div className="skill-list">
          {skills.map((skill) => (
            <article className="skill" key={skill.id}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <strong>{skill.level}%</strong>
              </div>
              <div
                className="skill-track"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={skill.level}
              >
                <div style={{ width: `${Math.min(100, Math.max(0, skill.level))}%` }} />
              </div>
              <p>{skill.category}{skill.experienceYears ? ` · ${skill.experienceYears} years` : ""}</p>
              {skill.technologies?.length > 0 && (
                <div>
                  {skill.technologies.map((technology) => (
                    <span className="technology" key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GarageSection;
