import { useEffect, useState } from "react";
import { fetchContact } from "../api/resumeApi";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContact().then((data) => setContact(data[0]));
  }, []);

  if (!contact) return null;

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="card">
        <p>Email: {contact.email}</p>
        <p><a href={contact.github} target="_blank">GitHub</a></p>
        <p><a href={contact.linkedin} target="_blank">LinkedIn</a></p>
      </div>
    </section>
  );
}
