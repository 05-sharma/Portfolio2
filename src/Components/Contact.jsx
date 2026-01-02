"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      style={{ padding: "5rem 2rem", position: "relative" }}
      id="contact"
    >
       <div className="hero-glow right" />
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
        Contact Me
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
      
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              maxWidth: "500px",
              background: "#1a1a1a",
              padding: "2.5rem",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <input type="text" placeholder="Your Name" style={inputStyle} />
            <input type="email" placeholder="Your Email" style={inputStyle} />
            <textarea placeholder="Your Message" rows={6} style={inputStyle} />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                padding: "1rem",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #7f00ff, #e100ff)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                border: "none",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            fontSize: "1.15rem",
          }}
        >
          <p>
            <FaEnvelope style={{ color: "#EA4335", marginRight: "0.6rem" }} />
            sharmakavita0518@gmail.com
          </p>
          <p>
            <FaPhone style={{ color: "#34A853", marginRight: "0.6rem" }} />
            +977 9XXXXXXX44
          </p>
          <p>
            <FaMapMarkerAlt style={{ color: "#4285F4", marginRight: "0.6rem" }} />
            Tilottama-5, Manigram, Nepal
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "1.5rem",
              fontSize: "1.8rem",
            }}
          >
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/05-sharma"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff" }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#E4405F" }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.facebook.com/kavita.sharma.2009"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1877F2" }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </div>

      
      <p
        style={{
          textAlign: "center",
          marginTop: "5rem",
          color: "#888",
          fontSize: "0.9rem",
        }}
      >
        &copy; {new Date().getFullYear()} Kavita Sharma. All rights reserved.
      </p>
    </section>
  );
}

const inputStyle = {
  padding: "1rem",
  borderRadius: "5px",
  border: "1px solid #333",
  background: "#1a1a1a",
  color: "#fff",
  fontSize: "1rem",
};
