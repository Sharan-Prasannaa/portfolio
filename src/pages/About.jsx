import { useEffect, useState } from "react";
import { fetchAbout } from "../api/resumeApi";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetchAbout().then(setAbout);
  }, []);

  return (
    <section id="about">
      <h2>About Me</h2>
      {about.map((item) => (
        <p key={item.id} style={{ maxWidth: "700px", lineHeight: "1.6" }}>
          {item.description}
        </p>
      ))}
    </section>
  );
}
