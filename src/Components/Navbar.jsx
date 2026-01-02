"use client";
export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "rgba(17, 17, 17, 0.6)", // semi-transparent
        backdropFilter: "blur(10px)", // blurry background
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "94.9%",
        zIndex: 50,
      }}
    >
      <h1
        className="gradient-text"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
      >
        <a href="#home" className="logo-link">
          PORTFOLIO
        </a>
      </h1>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        <li>
          <a href="#about" className="nav-link">About</a>
        </li>
        <li>
          <a href="#skills" className="nav-link">Skills</a>
        </li>
        <li>
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #7f00ff, #e100ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logo-link:hover {
          transform: scale(1.1);
        }
        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.2rem 0;
          transition: all 0.3s ease;
        }
        .nav-link::after {
          content: '';
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
        .nav-link:hover {
          color: #e100ff;
        }
      `}</style>
    </nav>
  );
}
