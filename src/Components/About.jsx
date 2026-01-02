"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "../../public/about.svg";

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background glow */}
      <div className="about-glow" />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* LEFT: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center" }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src={about}
              alt="About Me Illustration"
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "auto",
              }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            background: "rgba(255,255,255,0.03)",
            padding: "2.5rem",
            borderRadius: "20px",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: "800",
              marginBottom: "1rem",
            }}
          >
            About <span className="gradient-text">Me</span>
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#ccc",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            Hi! I’m <strong>Kavita Sharma</strong>, a creative{" "}
            <strong>UI/UX designer</strong>, <strong>programmer</strong>, and{" "}
            <strong>graphic designer</strong>. I recently completed my SEE and
            enjoy transforming ideas into interactive and visually appealing
            digital experiences.
          </p>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#ccc",
              lineHeight: 1.7,
            }}
          >
            I love combining design and code to build projects that are not only
            beautiful but also functional and user-friendly.
          </p>

          {/* Skill tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginTop: "1.8rem",
            }}
          >
            {[
              "UI/UX Design",
              "Web Development",
              "Graphic Design",
              "Figma",
              "React",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #7f00ff30, #e100ff30)",
                  fontSize: "0.9rem",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
