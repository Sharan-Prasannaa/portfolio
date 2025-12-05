import { useEffect, useState } from "react";

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/resume/")
      .then((res) => res.json())
      .then((data) => setPdfUrl(data.url));
  }, []);

  return (
    <section className="hero">
      <h1>Hello, I'm Sharath 👋</h1>
      <h2>Full Stack Developer • Python | Django | React</h2>

      <div className="cta-buttons">
        <a href="#projects">
          <button className="button primary">View Projects</button>
        </a>

        <a href="http://127.0.0.1:8000/api/resume/download/">
            <button className="button secondary">Download Resume</button>
        </a>
      </div>
    </section>
  );
}
