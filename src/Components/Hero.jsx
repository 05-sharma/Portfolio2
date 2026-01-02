"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bggirl from "../../public/bggirl.svg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow left" />
      <div className="hero-glow right" />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-text"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I’m <br />
          <span className="gradient-text animated-gradient">
            Kavita Sharma
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I design and build beautiful, interactive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero-buttons"
        >
          <motion.a whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} href="#projects" style={primaryBtn}>
            View Projects
          </motion.a>

          <motion.a whileHover={{ scale: 1.05 }} href="#contact" style={secondaryBtn}>
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hero-image"
      >
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
          <Image src={bggirl} alt="Girl Coding" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3rem;
          padding: 6rem 2rem 4rem;
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .hero-text p {
          margin-top: 1.2rem;
          font-size: 1.4rem;
          color: #ccc;
          max-width: 500px;
        }

        .hero-buttons {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
        }

        .hero-image img {
          width: 100%;
          max-width: 420px;
          height: auto;
        }

        /* 🔥 Mobile */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 7rem;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text p {
            font-size: 1.1rem;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }

          .hero-image {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

const primaryBtn = {
  padding: "0.9rem 1.8rem",
  borderRadius: "12px",
  background: "linear-gradient(90deg, #7f00ff, #e100ff)",
  color: "#fff",
  fontWeight: "600",
  textDecoration: "none",
};

const secondaryBtn = {
  padding: "0.9rem 1.8rem",
  borderRadius: "12px",
  border: "1px solid #555",
  color: "#fff",
  textDecoration: "none",
};
