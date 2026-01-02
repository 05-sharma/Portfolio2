"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bggirl from "../../public/bggirl.svg";

export default function Hero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "3rem",
        padding: "5rem 2rem",
        minHeight: "90vh",
        position: "relative",
        overflow: "hidden",
      }}
      id="home"
    >
      {/* Background glow */}
      <div className="hero-glow left" />
      <div className="hero-glow right" />

      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            lineHeight: 1.1,
          }}
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
          style={{
            marginTop: "1.2rem",
            fontSize: "1.4rem",
            color: "#ccc",
            maxWidth: "500px",
          }}
        >
          I design and build beautiful, interactive digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            style={primaryBtn}
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            style={secondaryBtn}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT: Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ textAlign: "center" }}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Image
            src={bggirl}
            alt="Girl Coding"
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "auto",
            }}
          />
        </motion.div>
      </motion.div>

    </section>
  );
}

/* Styles */
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
