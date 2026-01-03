"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "An online shopping platform with cart functionality and payment integration.",
      link: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using React, Node.js, and Socket.io.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      style={{ padding: "5rem 2rem", position: "relative" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "4rem",
          color: "#fff",
        }}
      >
        My Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(127,0,255,0.6)",
            }}
            style={{
              background: "#1a1a1a",
              padding: "2rem",
              borderRadius: "16px",
              color: "#fff",
              textDecoration: "none",
              cursor: "pointer",
              border: "2px solid #7f00ff", // added border
              boxShadow: "0 10px 30px rgba(127,0,255,0.2)", // subtle neon shadow
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#fff",
              }}
            >
              {project.title}
            </h3>
            <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: "1.5" }}>
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
