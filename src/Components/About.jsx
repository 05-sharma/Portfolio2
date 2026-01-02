"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "../../public/about.svg";

export default function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about-glow" />

      <div className="about-container">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="about-image"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Image src={about} alt="About Me Illustration" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="about-card"
        >
          <h2>
            About <span className="gradient-text">Me</span>
          </h2>

          <p>
            Hi! I’m <strong>Kavita Sharma</strong>, a creative{" "}
            <strong>UI/UX designer</strong>, <strong>programmer</strong>, and{" "}
            <strong>graphic designer</strong>. I recently completed my SEE and
            enjoy transforming ideas into interactive and visually appealing
            digital experiences.
          </p>

          <p>
            I love combining design and code to build projects that are not only
            beautiful but also functional and user-friendly.
          </p>

          <div className="skills">
            {["UI/UX Design", "Web Development", "Graphic Design", "Figma", "React"].map(
              (skill) => (
                <motion.span key={skill} whileHover={{ scale: 1.1 }}>
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .about-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-image {
          text-align: center;
        }

        .about-image img {
          width: 100%;
          max-width: 420px;
          height: auto;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 2.5rem;
          border-radius: 20px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .about-card h2 {
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .about-card p {
          font-size: 1.15rem;
          color: #ccc;
          line-height: 1.7;
          margin-bottom: 1.3rem;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.8rem;
        }

        .skills span {
          padding: 0.45rem 1rem;
          border-radius: 999px;
          background: linear-gradient(90deg, #7f00ff30, #e100ff30);
          font-size: 0.9rem;
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-card {
            padding: 2rem 1.5rem;
          }

          .about-card h2 {
            font-size: 2.1rem;
          }

          .about-card p {
            font-size: 1.05rem;
          }

          .skills {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
