"use client";
import { motion } from "framer-motion";

const coursesAndWorkshops = [
  {
    title: "Full Stack Web Development",
    provider: "ARIBT",
    year: "2025 – Present",
    type: "Course",
    description:
      "Currently learning full-stack web development along with fundamentals of UI/UX design and basic graphic design. Hands-on experience with HTML, CSS, JavaScript, React, Next.js, and design tools.",
  },
  {
    title: "Arduino Workshop",
    provider: "SSIRC",
    year: "2025",
    type: "Workshop",
    description:
      "Attended a hands-on Arduino workshop organized by the school club to gain practical experience with electronics and microcontrollers.",
  },
];

export default function CoursesAndWorkshops() {
  return (
    <section
      id="courses-workshops"
      style={{ padding: "4rem 2rem", color: "#fff" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "3rem",
        }}
      >
        Courses & Workshops
      </motion.h2>
      <div className="hero-glow left" />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {coursesAndWorkshops.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            style={{
              padding: "1.8rem",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 25px rgba(0,255,255,0.15)",
            }}
          >
            <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              {item.year} • {item.type}
            </span>

            <h3 style={{ fontSize: "1.3rem", margin: "0.4rem 0" }}>
              {item.title}
            </h3>

            <h4 style={{ fontSize: "1rem", opacity: 0.85 }}>
              {item.provider}
            </h4>

            <p style={{ fontSize: "0.95rem", marginTop: "0.6rem", opacity: 0.9 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
