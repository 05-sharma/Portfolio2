"use client";
import { motion } from "framer-motion";


  const education = [
  {
    year: "2023  –  Present",
    degree: "Secondary & Higher Secondary Education",
    institute: "Shanti Model Secondary School",
    description:
      "Completed Secondary Education (Class 10) and currently pursuing Higher Secondary Education (Class 11) with a focus on computer science and mathematics.",
  },
];



export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "4rem 2rem",
        color: "#fff",
      }}
    >
      <div className="hero-glow right" />
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
        Education
      </motion.h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            <span
              style={{
                fontSize: "0.9rem",
                opacity: 0.8,
              }}
            >
              {item.year}
            </span>

            <h3
              style={{
                fontSize: "1.3rem",
                margin: "0.4rem 0",
              }}
            >
              {item.degree}
            </h3>

            <h4
              style={{
                fontSize: "1rem",
                opacity: 0.85,
                marginBottom: "0.5rem",
              }}
            >
              {item.institute}
            </h4>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.6",
                opacity: 0.9,
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
