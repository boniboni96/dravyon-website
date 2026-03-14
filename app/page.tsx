"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Loader from "./Loader";
import { motion, useInView, type Variants } from "framer-motion";
import CountUp from "react-countup";

/* ============================================================
   TYPES
============================================================ */
interface SectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ============================================================
   REUSABLE SECTION WRAPPER
============================================================ */
function Section({ children, style, id }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ padding: "100px 8%", textAlign: "center", ...style }}
    >
      {children}
    </motion.section>
  );
}

/* ============================================================
   REUSABLE SECTION HEADING
============================================================ */
function SectionHeading({ sub, title }: { sub: string; title: string }) {
  return (
    <>
      <motion.p variants={fadeUp} style={{ color: "#ff7a18", letterSpacing: 4, fontSize: 12, marginBottom: 10, textTransform: "uppercase" }}>
        {sub}
      </motion.p>
      <motion.h2 variants={fadeUp} style={{
        fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, marginBottom: 50,
        background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
      }}>
        {title}
      </motion.h2>
    </>
  );
}

/* ============================================================
   DIVIDER
============================================================ */
function Divider({ color = "#ff7a18" }: { color?: string }) {
  return (
    <div style={{
      height: 1,
      background: `linear-gradient(90deg, transparent, rgba(${color === "#007bff" ? "0,150,255" : "255,122,24"},0.4), transparent)`,
      margin: "0 8%",
    }} />
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */
export default function Home() {

  const [loading, setLoading] = useState(true);
  const targetDate = new Date("April 2, 2026 09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      const d = targetDate - Date.now();
      setTimeLeft({
        days: Math.max(0, Math.floor(d / 86400000)),
        hours: Math.max(0, Math.floor((d % 86400000) / 3600000)),
        minutes: Math.max(0, Math.floor((d % 3600000) / 60000)),
        seconds: Math.max(0, Math.floor((d % 60000) / 1000)),
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  if (loading) return <Loader />;

  /* ---- DATA ---- */

  const day1Schedule = [
    { time: "8:30 AM", title: "Inauguration & Opening Ceremony", desc: "Welcome address, lighting of lamp & grand kickoff of DRAVYON 2K26" },
    { time: "9:30 AM", title: "Technical Events Begin", desc: "Shadow Coder · Sketch a Tech · Paper Presentation · Tech Debate · Electro Quiz · Logo Designing" },
    { time: "1:00 PM", title: "Lunch Break", desc: "Refreshments & networking" },
    { time: "2:00 PM", title: "Non-Technical Events", desc: "Photo Hunt · Quest X · Singing · Box Cricket · FF/Chess · Connexions · Dance · Fashion Walk" },
    { time: "5:30 PM", title: "Day 1 Wrap Up", desc: "Results announcement & closing for the day" },
  ];

  const day2Schedule = [
    { time: "8:30 AM", title: "Day 2 Opening", desc: "Welcome & briefing for Sports & Track events" },
    { time: "9:00 AM", title: "Track Events Begin", desc: "200m · 400m · 800m · 4×100 Relay · Shotput · Long Jump" },
    { time: "10:30 AM", title: "Team Sports Begin", desc: "Throw Ball · Basketball · Football · Kabaddi · Volleyball · Cricket" },
    { time: "1:00 PM", title: "Lunch Break", desc: "Refreshments & networking" },
    { time: "2:00 PM", title: "Finals & Semi-Finals", desc: "Finals of all sports & track competitions" },
    { time: "4:30 PM", title: "Award Ceremony & Valedictory", desc: "Prize distribution, certificates & closing ceremony" },
  ];

  const techEvents = [
    { name: "Shadow Coder", icon: "💻" },
    { name: "Sketch a Tech", icon: "✏️" },
    { name: "Paper Presentation", icon: "📄" },
    { name: "Tech Debate", icon: "🎙️" },
    { name: "Electro Quiz", icon: "⚡" },
    { name: "Logo Designing", icon: "🎨" },
  ];

  const nonTechEvents = [
    { name: "Photo Hunt", icon: "📸" },
    { name: "Quest X", icon: "🔍" },
    { name: "Singing", icon: "🎤" },
    { name: "Box Cricket", icon: "🏏" },
    { name: "FF / Chess", icon: "♟️" },
    { name: "Connexions", icon: "🔗" },
    { name: "Dance", icon: "💃" },
    { name: "Fashion Walk", icon: "👗" },
  ];

  const sportsEvents = [
    { name: "Throw Ball", icon: "🏐" },
    { name: "Basketball", icon: "🏀" },
    { name: "Football", icon: "⚽" },
    { name: "Kabaddi", icon: "🤼" },
    { name: "Volleyball", icon: "🏐" },
    { name: "Cricket", icon: "🏏" },
  ];

  const trackEvents = [
    { name: "200 Metres", icon: "🏃" },
    { name: "400 Metres", icon: "🏃" },
    { name: "800 Metres", icon: "🏃" },
    { name: "4×100 Relay", icon: "🏅" },
    { name: "Shotput", icon: "🎯" },
    { name: "Long Jump", icon: "🦘" },
  ];

  /* ---- STYLES ---- */
  const cardBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,122,24,0.2)",
    borderRadius: 16,
    padding: "24px 18px",
    backdropFilter: "blur(10px)",
  };

  const blueCardBase: React.CSSProperties = {
    background: "rgba(0,150,255,0.05)",
    border: "1px solid rgba(0,150,255,0.15)",
    borderRadius: 16,
    padding: "24px 18px",
    backdropFilter: "blur(10px)",
  };

  /* ============================================================
     RENDER
  ============================================================ */
  return (
    <main style={{ background: "#050505", overflowX: "hidden" }}>

      {/* ===================== 1. HERO ===================== */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>

        <video autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src="/phoenix.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "radial-gradient(circle at 25% 40%, rgba(255,80,0,0.2), transparent 50%), radial-gradient(circle at 75% 60%, rgba(0,150,255,0.15), transparent 50%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", width: "100%" }}
        >
          <motion.img
            src="/logo.png"
            alt="DRAVYON"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ width: 120, height: 120, objectFit: "contain", marginBottom: 20, filter: "drop-shadow(0 0 20px #ff7a18) drop-shadow(0 0 40px #007bff)" }}
          />

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "20px" }}
            animate={{ opacity: 1, letterSpacing: "6px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              fontSize: "clamp(38px, 8vw, 90px)", fontWeight: 900,
              background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              marginBottom: 10,
            }}
          >
            DRAVYON 2K26
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "#fff", letterSpacing: 3, marginBottom: 6, fontWeight: 700 }}>
            National Level Technical Symposium
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ fontSize: "clamp(11px, 1.8vw, 15px)", color: "#ff7a18", letterSpacing: 2, marginBottom: 30, lineHeight: 1.8, padding: "0 10px" }}>
            APRIL 2 – 3, 2026 · SAVEETHA UNIVERSITY
          </motion.p>

          {/* Countdown */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            style={{ display: "flex", justifyContent: "center", gap: "clamp(8px, 3vw, 20px)", flexWrap: "wrap", marginBottom: 35 }}>
            {[
              { val: timeLeft.days, label: "Days" },
              { val: timeLeft.hours, label: "Hours" },
              { val: timeLeft.minutes, label: "Mins" },
              { val: timeLeft.seconds, label: "Secs" },
            ].map(({ val, label }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,122,24,0.4)", borderRadius: 12,
                padding: "14px 20px", minWidth: 72, textAlign: "center",
                boxShadow: "0 0 18px rgba(255,122,24,0.2)",
              }}>
                <div style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 900, color: "#ff7a18" }}>{String(val).padStart(2, "0")}</div>
                <div style={{ fontSize: 11, color: "#888", letterSpacing: 1, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://forms.gle/VNdguH4seYbX1wGQ9" target="_blank" rel="noopener noreferrer" style={{
              padding: "14px 36px", borderRadius: 30,
              background: "linear-gradient(45deg, #ff512f, #ff7a18)",
              color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 15,
              boxShadow: "0 0 25px rgba(255,122,24,0.5)", letterSpacing: 1,
            }}>
              Register Now
            </a>
            <Link href="/events" style={{
              padding: "14px 36px", borderRadius: 30,
              background: "transparent", color: "#fff", fontWeight: 600,
              textDecoration: "none", fontSize: 15,
              border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)",
            }}>
              Explore Events
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 2, color: "#ff7a18", fontSize: 26 }}
        >↓</motion.div>
      </div>

      {/* ===================== 2. ABOUT ===================== */}
      <Divider />
      <Section>
        <SectionHeading sub="About The Event" title="What is DRAVYON?" />
        <motion.p variants={fadeUp} style={{ maxWidth: 720, margin: "0 auto 60px", color: "#aaa", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 2 }}>
          <span style={{ color: "#ff7a18", fontWeight: 700 }}>DRAVYON 2K26</span> is a National Level Technical Symposium organized by the{" "}
          <span style={{ color: "#fff" }}>Department of Product Development, Saveetha University</span>. A two-day celebration of innovation, talent, and competition — open to students from all colleges across India.
        </motion.p>

        <motion.div variants={stagger} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "clamp(24px, 5vw, 70px)" }}>
          {[
            { end: 20, suffix: "+", label: "Events" },
            { end: 2, suffix: " Days", label: "Of Action" },
            { end: 500, suffix: "+", label: "Participants" },
            { end: 99, prefix: "₹", label: "Starting Fee" },
          ].map(({ end, suffix, prefix, label }) => (
            <motion.div key={label} variants={fadeUp} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(30px, 6vw, 54px)", fontWeight: 900, color: "#ff7a18" }}>
                <CountUp end={end} duration={2.5} suffix={suffix ?? ""} prefix={prefix ?? ""} enableScrollSpy scrollSpyOnce />
              </div>
              <div style={{ color: "#666", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginTop: 6 }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ===================== 3. EVENTS HIGHLIGHT ===================== */}
      <Divider />
      <Section>
        <SectionHeading sub="What's Happening" title="Event Categories" />

        <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 50 }}>
          {([1, 2] as const).map((d) => (
            <button key={d} onClick={() => setActiveDay(d)} style={{
              padding: "12px 32px", borderRadius: 30, cursor: "pointer", fontWeight: 700, fontSize: 15,
              border: "none", transition: "0.3s",
              background: activeDay === d ? "linear-gradient(45deg, #ff512f, #ff7a18)" : "rgba(255,255,255,0.06)",
              color: activeDay === d ? "#fff" : "#888",
              boxShadow: activeDay === d ? "0 0 20px rgba(255,122,24,0.4)" : "none",
            }}>
              Day {d} — April {d + 1}
            </button>
          ))}
        </motion.div>

        {activeDay === 1 ? (
          <motion.div key="day1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ color: "#ff7a18", letterSpacing: 3, fontSize: 12, textTransform: "uppercase", marginBottom: 20 }}>⚡ Technical Events · ₹99 per head</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, maxWidth: 900, margin: "0 auto 50px" }}>
              {techEvents.map(({ name, icon }) => (
                <div key={name} style={{ ...cardBase, textAlign: "center", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 25px rgba(255,122,24,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
                </div>
              ))}
            </div>

            <p style={{ color: "#007bff", letterSpacing: 3, fontSize: 12, textTransform: "uppercase", marginBottom: 20 }}>🎭 Non-Technical Events · ₹99 per head</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, maxWidth: 900, margin: "0 auto 50px" }}>
              {nonTechEvents.map(({ name, icon }) => (
                <div key={name} style={{ ...blueCardBase, textAlign: "center", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 25px rgba(0,150,255,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
                </div>
              ))}
            </div>

            <a href="https://forms.gle/VNdguH4seYbX1wGQ9" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block", padding: "13px 36px", borderRadius: 30,
              background: "linear-gradient(45deg, #ff512f, #ff7a18)",
              color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 15,
              boxShadow: "0 0 20px rgba(255,122,24,0.4)",
            }}>
              Register for Day 1 — ₹99
            </a>
          </motion.div>
        ) : (
          <motion.div key="day2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ color: "#ff7a18", letterSpacing: 3, fontSize: 12, textTransform: "uppercase", marginBottom: 20 }}>🏆 Sports Events · ₹549 per team</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, maxWidth: 900, margin: "0 auto 50px" }}>
              {sportsEvents.map(({ name, icon }) => (
                <div key={name} style={{ ...cardBase, textAlign: "center", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 25px rgba(255,122,24,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
                </div>
              ))}
            </div>

            <p style={{ color: "#007bff", letterSpacing: 3, fontSize: 12, textTransform: "uppercase", marginBottom: 20 }}>🏃 Track Events · ₹129 per head</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18, maxWidth: 900, margin: "0 auto 50px" }}>
              {trackEvents.map(({ name, icon }) => (
                <div key={name} style={{ ...blueCardBase, textAlign: "center", transition: "0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 25px rgba(0,150,255,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{name}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://forms.gle/z4i1jqviHwx2Rru9A" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", padding: "13px 32px", borderRadius: 30,
                background: "linear-gradient(45deg, #ff512f, #ff7a18)",
                color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 15,
                boxShadow: "0 0 20px rgba(255,122,24,0.4)",
              }}>
                Register for Sports — ₹549/team
              </a>
              <a href="https://forms.gle/FT7LHWfbqZyhg57i7" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", padding: "13px 32px", borderRadius: 30,
                background: "rgba(0,150,255,0.15)",
                border: "1px solid rgba(0,150,255,0.4)",
                color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 15,
                boxShadow: "0 0 20px rgba(0,150,255,0.3)",
              }}>
                Register for Tracks — ₹129/head
              </a>
            </div>
          </motion.div>
        )}
      </Section>

      {/* ===================== 4. WHY ATTEND ===================== */}
      <Divider color="#007bff" />
      <Section>
        <SectionHeading sub="Why Join Us" title="Why Attend DRAVYON?" />
        <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          {[
            { icon: "🏆", title: "Prizes & Recognition", desc: "Win exciting prizes and get recognized at a national level" },
            { icon: "🤝", title: "Networking", desc: "Connect with talented students and innovators from across India" },
            { icon: "💡", title: "20+ Events", desc: "Technical, non-tech, sports & track — something for everyone" },
            { icon: "🎓", title: "Certificates", desc: "Every participant receives a certificate of participation" },
          ].map(({ icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} style={{ ...blueCardBase, transition: "0.3s" }}
              whileHover={{ y: -8, boxShadow: "0 0 28px rgba(0,150,255,0.4)" }}
            >
              <div style={{ fontSize: 44, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.8 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ===================== 5. TIMELINE ===================== */}
      <Divider />
      <Section>
        <SectionHeading sub="Schedule" title="Event Timeline" />

        <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 60 }}>
          {([1, 2] as const).map((d) => (
            <button key={d} onClick={() => setActiveDay(d)} style={{
              padding: "12px 30px", borderRadius: 30, cursor: "pointer", fontWeight: 700, fontSize: 14,
              border: "none", transition: "0.3s",
              background: activeDay === d ? "linear-gradient(45deg, #ff512f, #ff7a18)" : "rgba(255,255,255,0.06)",
              color: activeDay === d ? "#fff" : "#888",
              boxShadow: activeDay === d ? "0 0 20px rgba(255,122,24,0.4)" : "none",
            }}>
              Day {d} — April {d + 1}
            </button>
          ))}
        </motion.div>

        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
            background: "linear-gradient(to bottom, #ff7a18, #007bff)",
            transform: "translateX(-50%)", opacity: 0.3,
          }} />

          {(activeDay === 1 ? day1Schedule : day2Schedule).map(({ time, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                marginBottom: 28,
                paddingLeft: i % 2 === 0 ? 0 : "52%",
                paddingRight: i % 2 === 0 ? "52%" : 0,
              }}
            >
              <div style={{
                position: "absolute", left: "50%", transform: "translateX(-50%)",
                width: 12, height: 12, borderRadius: "50%",
                background: i % 2 === 0 ? "#ff7a18" : "#007bff",
                boxShadow: `0 0 10px ${i % 2 === 0 ? "#ff7a18" : "#007bff"}`,
                marginTop: 18,
              }} />
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${i % 2 === 0 ? "rgba(255,122,24,0.3)" : "rgba(0,150,255,0.3)"}`,
                borderRadius: 14, padding: "16px 20px",
                textAlign: "left", backdropFilter: "blur(10px)", maxWidth: "100%",
              }}>
                <div style={{ color: i % 2 === 0 ? "#ff7a18" : "#007bff", fontSize: 11, letterSpacing: 2, marginBottom: 5 }}>{time}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{title}</div>
                <div style={{ color: "#666", fontSize: 12, lineHeight: 1.7 }}>{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===================== 6. TEAM TEASER ===================== */}
      <Divider color="#007bff" />
      <Section>
        <SectionHeading sub="The People Behind It" title="Meet The Team" />
        <motion.div variants={stagger} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24, marginBottom: 50 }}>
          {[
            { name: "Faculty Name 1", role: "Faculty Coordinator", img: "/team/faculty1.jpg" },
            { name: "Faculty Name 2", role: "Faculty Coordinator", img: "/team/faculty2.jpg" },
            { name: "R.S.Harshavarthan", role: "Lead Organizer", img: "/team/organizer1.jpg" },
            { name: "Renganathan", role: "Organizer", img: "/team/organizer2.jpg" },
          ].map(({ name, role, img }) => (
            <motion.div key={name} variants={fadeUp}
              whileHover={{ y: -10, boxShadow: "0 0 30px rgba(255,122,24,0.5)" }}
              style={{ background: "#111", borderRadius: 16, width: 190, overflow: "hidden", border: "1px solid rgba(255,122,24,0.2)", transition: "0.3s" }}
            >
              <img src={img} alt={name} style={{ width: "100%", height: 190, objectFit: "cover" }} />
              <div style={{ padding: "14px 12px", textAlign: "center" }}>
                <div style={{
                  fontWeight: 700, fontSize: 14,
                  background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{name}</div>
                <div style={{ color: "#555", fontSize: 12, marginTop: 4 }}>{role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link href="/team" style={{
            padding: "13px 38px", borderRadius: 30,
            border: "1px solid rgba(255,122,24,0.4)",
            color: "#ff7a18", fontWeight: 700, textDecoration: "none", fontSize: 15,
            backdropFilter: "blur(8px)",
          }}>
            Meet the Full Team
          </Link>
        </motion.div>
      </Section>

      {/* ===================== 7. SPONSORS ===================== */}
      <Divider />
      <Section id="sponsors">
        <SectionHeading sub="Our Supporters" title="Sponsors & Partners" />
        <motion.p variants={fadeUp} style={{ color: "#555", marginBottom: 50, fontSize: 14 }}>
          Sponsorship opportunities are open. Be a part of DRAVYON 2K26!
        </motion.p>
        <motion.div variants={stagger} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 18, marginBottom: 40 }}>
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} variants={fadeUp} style={{
              width: 155, height: 78, borderRadius: 12,
              background: "rgba(255,255,255,0.03)",
              border: "1px dashed rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#333", fontSize: 12, letterSpacing: 1,
            }}>
              SPONSOR {i}
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp}>
          <a href="mailto:dravyon2k26@gmail.com" style={{
            padding: "13px 34px", borderRadius: 30,
            background: "transparent", color: "#fff", fontWeight: 600,
            textDecoration: "none", fontSize: 14,
            border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
          }}>
            Interested in Sponsoring? Contact Us
          </a>
        </motion.div>
      </Section>

    </main>
  );
}