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
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
  { name: "PowerPoint", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_Office_PowerPoint_%282019%E2%80%932025%29.svg" },
  { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
];


const infiniteSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section style={{ padding: "4rem 0" }} id="skills">
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
        My Skills
      </motion.h2>

      
      <div style={{ overflow: "hidden", width: "100%" }}>
        
        <motion.div
          style={{
            display: "flex",
            width: "max-content",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {infiniteSkills.map((skill, index) => (
            <div
              key={index}
              style={{
                minWidth: "120px",
                height: "130px",
                marginRight: "2rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <Image src={skill.logo} alt={skill.name} width={55} height={55} />
              <span style={{ color: "#fff", marginTop: "0.6rem" }}>
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
