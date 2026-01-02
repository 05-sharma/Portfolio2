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
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="contact-form"
        >
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={6} />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="contact-info"
        >
          <p><FaEnvelope /> sharmakavita0518@gmail.com</p>
          <p><FaPhone /> +977 9XXXXXXX44</p>
          <p><FaMapMarkerAlt /> Tilottama-5, Manigram, Nepal</p>

          <div className="socials">
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/05-sharma" target="_blank" rel="noreferrer">
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/_.sharma.k1805/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/kavita.sharma.2009" target="_blank" rel="noreferrer">
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <p className="footer">
        &copy; {new Date().getFullYear()} Kavita Sharma. All rights reserved.
      </p>

      <style jsx>{`
        .contact {
          padding: 5rem 2rem;
          background: #111;
        }

        h2 {
          text-align: center;
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 4rem;
          color: #fff;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          background: #1a1a1a;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        input,
        textarea {
          padding: 1rem;
          border-radius: 5px;
          border: 1px solid #333;
          background: #1a1a1a;
          color: #fff;
          font-size: 1rem;
        }

        button {
          padding: 1rem;
          border-radius: 10px;
          background: linear-gradient(90deg, #7f00ff, #e100ff);
          color: #fff;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          font-size: 1.15rem;
          color: #fff;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .contact-info svg {
          font-size: 1.2rem;
        }

        .socials {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
          font-size: 1.8rem;
        }

        .socials a {
          color: #fff;
        }

        .socials a:nth-child(2) {
          color: #e4405f;
        }

        .socials a:nth-child(3) {
          color: #1877f2;
        }

        .footer {
          text-align: center;
          margin-top: 5rem;
          color: #888;
          font-size: 0.9rem;
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .contact-info {
            align-items: center;
          }

          .contact-info p {
            justify-content: center;
          }

          .socials {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
