import { useEffect, useState } from "react";
import { fetchExperience } from "../api/resumeApi";

export default function Experience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetchExperience().then(setExp);
  }, []);

  return (
    <section id="experience">
      <h2>Experience</h2>

      {exp.map((e) => (
        <div key={e.id} className="card">
          <h3>{e.role}</h3>
          <b>{e.company}</b>
          <p style={{ color: "var(--text-muted)" }}>
            {e.start} - {e.end ?? "Present"}
          </p>
          <p>{e.description}</p>
        </div>
      ))}
    </section>
  );
}
