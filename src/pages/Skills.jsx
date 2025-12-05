import { useEffect, useState } from "react";
import { fetchSkills } from "../api/resumeApi";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills().then(setSkills);
  }, []);

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="grid grid-3">
        {skills.map((s) => (
          <div key={s.id} className="card">
            <h3>{s.name}</h3>
            <p style={{ color: "var(--text-muted)" }}>{s.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
