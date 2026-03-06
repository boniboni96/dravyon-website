import "./globals.css";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "aos/dist/aos.css"
export const metadata = {
  title: "DRAVYON 2K26",
  description: "National Level Technical Symposium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}

        <nav className="navbar">

<div className="logo">
  <img src="/logo.png" alt="Dravyon Logo" className="nav-logo"/>
  <span>DRAVYON</span>
</div>

<div className="nav-links">
<Link href="/">Home</Link>
<Link href="/events">Events</Link>
<Link href="/team">Team</Link>
<Link href="/#footer">Contact</Link>
</div>

</nav>

        {/* PAGE CONTENT */}

        <main className="main-content">{children}</main>

        {/* FOOTER */}

        <footer id="footer" className="footer">

  {/* TOP TITLE */}
  <div className="footer-top">
    <h2>DRAVYON 2K26</h2>
    <p>National Level Technical Symposium</p>
    <p>April 2 – 3, 2026</p>
  </div>

  {/* FOOTER CONTENT */}
  <div className="footer-container">

    {/* GOOGLE MAP */}
    <div className="footer-map">

      <a
        href="https://maps.app.goo.gl/pfRALbyuVDhnSSTp6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
  src="/college-map.jpg"
  alt="college location"
  className="map-image"
/>
      </a>

      <p>Click map to view location</p>

    </div>

    {/* CONTACT DETAILS */}
    <div className="footer-contact">

      <h3>Contact Us</h3>

      <p>Department of Product Development</p>
      <p>SAVEETHA UNIVERSITY</p>
      <p>SAVEETHA UNIVERSITY
22G8+9HP, Kuthambakkam, Tamil Nadu 602105, India</p>

      <div className="footer-icons">

        <a href="mailto:dravyon2K26@gmail.com" className="footer-link">
📧 dravyon2k26@gmail.com
</a>

        <a
          href="https://wa.me/919884054678"
          target="_blank"
        >
          💬
        </a>

        <a
          href="https://www.instagram.com/dravyon2k26/"
          target="_blank"
        >
          📷
        </a>

      </div>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="footer-bottom">

    <p>© 2026 DRAVYON | All Rights Reserved</p>

    <p className="designer">
      Designed by <span>R.S.Harshavarthan</span>
    </p>

  </div>

</footer>
      </body>
    </html>
  );
}