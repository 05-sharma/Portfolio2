"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="gradient-text logo">
          <a href="#home" className="logo-link">PORTFOLIO</a>
        </h1>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside className={`drawer ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </aside>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: rgba(17, 17, 17, 0.6);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7f00ff, #e100ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1.4rem;
          font-weight: bold;
        }

        .logo-link {
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0%;
          background: #e100ff;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 60;
        }

        .hamburger span {
          width: 26px;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Drawer */
        .drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          max-width: 300px;
          height: 100vh;
          background: rgba(17, 17, 17, 0.95);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          transition: right 0.35s ease;
          z-index: 55;
        }

        .drawer.open {
          right: 0;
        }

        .drawer a {
          color: white;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .drawer a:hover {
          color: #e100ff;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 54;
        }

        .overlay.show {
          opacity: 1;
          pointer-events: all;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
