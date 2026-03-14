"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link:hover { color: #ff7a18 !important; }
        .map-img:hover { transform: scale(1.04); filter: brightness(1) !important; }
      `}</style>

      <footer id="footer" style={{
        background: "#080808",
        padding: "70px 8% 36px",
        borderTop: "1px solid rgba(255,122,24,0.15)",
        color: "#bbb",
      }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <img src="/logo.png" alt="logo" style={{ width: 65, marginBottom: 14, filter: "drop-shadow(0 0 12px #ff7a18)" }} />
          <h2 style={{ fontSize: 30, color: "#ff7a18", marginBottom: 6, letterSpacing: 2 }}>DRAVYON 2K26</h2>
          <p style={{ color: "#444", fontSize: 13, letterSpacing: 1 }}>National Level Technical Symposium · April 2–3, 2026 · Saveetha University</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, marginBottom: 50 }}>

          <div>
            <h4 style={{ color: "#ff7a18", marginBottom: 16, letterSpacing: 1, fontSize: 14, textTransform: "uppercase" }}>Quick Links</h4>
            {[
              { label: "Home", href: "/" },
              { label: "Events", href: "/events" },
              { label: "Team", href: "/team" },
              { label: "Contact", href: "/#footer" },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link href={href} className="footer-link" style={{ color: "#555", textDecoration: "none", fontSize: 14, transition: "0.3s" }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#ff7a18", marginBottom: 16, letterSpacing: 1, fontSize: 14, textTransform: "uppercase" }}>Register</h4>
            {[
              { label: "Tech & Non-Tech — ₹99", href: "https://forms.gle/VNdguH4seYbX1wGQ9" },
              { label: "Sports — ₹549 / team", href: "https://forms.gle/z4i1jqviHwx2Rru9A" },
              { label: "Tracks — ₹129 / head", href: "https://forms.gle/FT7LHWfbqZyhg57i7" },
            ].map(({ label, href }) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="footer-link"
                  style={{ color: "#555", textDecoration: "none", fontSize: 14, transition: "0.3s" }}>
                  {label}
                </a>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#ff7a18", marginBottom: 16, letterSpacing: 1, fontSize: 14, textTransform: "uppercase" }}>Contact Us</h4>
            <p style={{ fontSize: 14, marginBottom: 6, color: "#555" }}>Dept. of Product Development</p>
            <p style={{ fontSize: 14, marginBottom: 6, color: "#555" }}>Saveetha University, Tamil Nadu</p>
            <a href="mailto:dravyon2k26@gmail.com" style={{ color: "#ff7a18", fontSize: 14, textDecoration: "none", display: "block", marginBottom: 16 }}>
              dravyon2k26@gmail.com
            </a>
            <div style={{ display: "flex", gap: 16, fontSize: 22 }}>
              <a href="mailto:dravyon2k26@gmail.com" style={{ textDecoration: "none" }}>📧</a>
              <a href="https://wa.me/919884054678" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>💬</a>
              <a href="https://www.instagram.com/dravyon2k26/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>📷</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#ff7a18", marginBottom: 16, letterSpacing: 1, fontSize: 14, textTransform: "uppercase" }}>Location</h4>
            <a href="https://maps.app.goo.gl/pfRALbyuVDhnSSTp6" target="_blank" rel="noopener noreferrer">
              <img
                src="/college-map.jpg"
                alt="college location"
                className="map-img"
                style={{
  width: 320, borderRadius: 12, cursor: "pointer",
  border: "1px solid rgba(255,122,24,0.2)",
  transition: "0.3s",
  filter: "brightness(0.8)",
}}
              />
            </a>
            <p style={{ color: "#444", fontSize: 12, marginTop: 8 }}>Click map to view location</p>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, textAlign: "center", fontSize: 15, color: "#888" }}>
  © 2026 DRAVYON · All Rights Reserved · Designed by{" "}
  <span style={{ color: "#ff7a18", fontWeight: 700, fontSize: 16 }}>R.S.Harshavarthan</span>
</div>

      </footer>
    </>
  );
}