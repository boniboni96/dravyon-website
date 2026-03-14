"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: 70,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 clamp(20px, 5%, 80px)",
      zIndex: 1000,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,122,24,0.15)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
    }}>

      {/* LOGO */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <img src="/logo.png" alt="Dravyon Logo" style={{ width: 38, height: 38, objectFit: "contain", filter: "drop-shadow(0 0 8px #ff7a18)" }} />
        <span style={{
          fontSize: 20, fontWeight: 800, letterSpacing: 2,
          background: "linear-gradient(90deg, #ff7a18, #ffd200)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>DRAVYON</span>
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
        {[
          { label: "Home", href: "/" },
{ label: "Events", href: "/events" },
{ label: "Team", href: "/team" },
{ label: "Sponsors", href: "/#sponsors" },
{ label: "Contact", href: "/#footer" },
        ].map(({ label, href }) => (
          <Link key={label} href={href} style={{
            color: "#ccc", textDecoration: "none", fontSize: 15,
            fontWeight: 500, letterSpacing: 1, transition: "0.3s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ff7a18")}
            onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
          >
            {label}
          </Link>
        ))}
        <a href="https://forms.gle/VNdguH4seYbX1wGQ9" target="_blank" rel="noopener noreferrer" style={{
          padding: "9px 22px", borderRadius: 25,
          background: "linear-gradient(45deg, #ff512f, #ff7a18)",
          color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 14,
          boxShadow: "0 0 15px rgba(255,122,24,0.4)", letterSpacing: 0.5,
          transition: "0.3s",
        }}>
          Register
        </a>
      </div>

      {/* HAMBURGER */}
      <div onClick={() => setMenuOpen(!menuOpen)} style={{
        display: "none", fontSize: 26, cursor: "pointer", color: "#ff7a18",
        zIndex: 1001,
      }} className="hamburger">
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* MOBILE MENU */}
      <div style={{
        position: "fixed",
        top: 70, right: 0,
        width: 220,
        background: "rgba(5,5,5,0.97)",
        backdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(255,122,24,0.2)",
        borderBottom: "1px solid rgba(255,122,24,0.2)",
        borderRadius: "0 0 0 16px",
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transform: menuOpen ? "translateX(0)" : "translateX(110%)",
        transition: "transform 0.35s ease",
        zIndex: 999,
      }}>
        {[
          { label: "Home", href: "/" },
{ label: "Events", href: "/events" },
{ label: "Team", href: "/team" },
{ label: "Sponsors", href: "/#sponsors" },
{ label: "Contact", href: "/#footer" },
        ].map(({ label, href }) => (
          <Link key={label} href={href}
            onClick={() => setMenuOpen(false)}
            style={{ color: "#ccc", textDecoration: "none", fontSize: 17, fontWeight: 500, letterSpacing: 1, transition: "0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ff7a18")}
            onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
          >
            {label}
          </Link>
        ))}
        <a href="https://forms.gle/VNdguH4seYbX1wGQ9" target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            padding: "10px 20px", borderRadius: 25, textAlign: "center",
            background: "linear-gradient(45deg, #ff512f, #ff7a18)",
            color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 14,
          }}>
          Register
        </a>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>

    </nav>
  );
}