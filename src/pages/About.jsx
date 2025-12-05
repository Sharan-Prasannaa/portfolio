import { useEffect, useState } from "react";
import { fetchAbout } from "../api/resumeApi";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetchAbout().then(setAbout);
  }, []);

  return (
    <section id="about" className="section">
      <h2>{`<AboutMe />`}</h2>
      {about.map(item => (
        <p key={item.id}>{item.description}</p>
      ))}
    </section>
  );
}
