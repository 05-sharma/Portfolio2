"use client";
import React from 'react'
import { motion } from "framer-motion";

function Education() {
  return (
    <section
      style={{ padding: "5rem 2rem", position: "relative" }}
      id="contact"
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
        Education
      </motion.h2>
    </section>
  )
}

export default Education