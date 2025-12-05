import { useEffect, useState } from "react";
import { fetchProjects } from "../api/resumeApi";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProjects().then(setData);
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="grid grid-2">
        {data.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p style={{ color: "var(--text-muted)" }}>{p.stack}</p>

            {p.link && (
              <a href={p.link} target="_blank">
                <button className="button primary" style={{ marginTop: "10px" }}>
                  Visit →
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
