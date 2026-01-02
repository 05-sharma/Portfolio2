"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NextJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
];

// Animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="skills-grid"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            whileHover={{
              scale: 1.12,
              rotate: 2,
              boxShadow: "0 0 25px rgba(0, 255, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="skill-card"
          >
            <Image src={skill.logo} alt={skill.name} width={50} height={50} />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .skills {
          padding: 4rem 2rem;
          text-align: center;
          background: radial-gradient(circle at top, #1a1a1a, #0a0a0a);
        }

        h2 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #fff;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .skill-card {
          width: 110px;
          height: 120px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .skill-card span {
          margin-top: 0.6rem;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          h2 {
            font-size: 2.1rem;
          }

          .skills-grid {
            gap: 1.3rem;
          }

          .skill-card {
            width: 90px;
            height: 100px;
          }

          .skill-card span {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
