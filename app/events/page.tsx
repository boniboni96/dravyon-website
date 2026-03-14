"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const eventData = {
  Technical: {
    icon: "💻",
    day: "Day 1 — April 2",
    fee: "₹99 per head",
    form: "https://forms.gle/VNdguH4seYbX1wGQ9",
    events: [
      { name: "Shadow Coder", image: "/events/shadow-coder.jpg", desc: "Test your coding skills in the dark — write code without seeing the output!", type: "Individual" },
      { name: "Sketch a Tech", image: "/events/sketch-tech.jpg", desc: "Draw and illustrate technical concepts creatively on paper.", type: "Individual" },
      { name: "Paper Presentation", image: "/events/paper-presentation.jpg", desc: "Present your research paper or innovative idea to a panel of judges.", type: "Team" },
      { name: "Tech Debate", image: "/events/tech-debate.jpg", desc: "Argue for or against cutting-edge tech topics in a structured debate.", type: "Team" },
      { name: "Electro Quiz", image: "/events/electro-quiz.jpg", desc: "A rapid-fire quiz on electronics, circuits, and technical knowledge.", type: "Team" },
      { name: "Logo Designing", image: "/events/logo-designing.jpg", desc: "Design a creative and impactful logo based on a given theme.", type: "Individual" },
    ],
  },
  "Non-Tech": {
    icon: "🎭",
    day: "Day 1 — April 2",
    fee: "₹99 per head",
    form: "https://forms.gle/VNdguH4seYbX1wGQ9",
    events: [
      { name: "Photo Hunt", image: "/events/photo-hunt.jpg", desc: "A thrilling scavenger hunt across campus — find clues through photos!", type: "Team" },
      { name: "Quest X", image: "/events/questx.jpg", desc: "A mystery challenge combining puzzles, riddles and quick thinking.", type: "Team" },
      { name: "Singing", image: "/events/singing.jpg", desc: "Showcase your vocal talent on a grand stage in front of a live audience.", type: "Individual" },
      { name: "Box Cricket", image: "/events/box-cricket.jpg", desc: "A fun and competitive mini cricket tournament played indoors.", type: "Team" },
      { name: "FF / Chess", image: "/events/chess.jpg", desc: "Compete in Free Fire or Chess — choose your battlefield!", type: "Individual" },
      { name: "Connexions", image: "/events/connexions.jpg", desc: "Connect the dots — a word and logic association challenge.", type: "Team" },
      { name: "Dance", image: "/events/dance.jpg", desc: "Perform solo or group dance in any style and own the stage.", type: "Individual" },
      { name: "Fashion Walk", image: "/events/fashion-walk.jpg", desc: "Walk the ramp with style, attitude and a creative outfit theme.", type: "Individual" },
    ],
  },
  Sports: {
    icon: "🏆",
    day: "Day 2 — April 3",
    fee: "₹549 per team",
    form: "https://forms.gle/z4i1jqviHwx2Rru9A",
    events: [
      { name: "Throw Ball", image: "/events/throwball.jpg", desc: "A fast-paced team sport — throw, catch and score!", type: "Team" },
      { name: "Basketball", image: "/events/basketball.jpg", desc: "Show your court skills in this competitive team basketball match.", type: "Team" },
      { name: "Football", image: "/events/football.jpg", desc: "The beautiful game — compete in a knockout football tournament.", type: "Team" },
      { name: "Kabaddi", image: "/events/kabaddi.jpg", desc: "The traditional contact sport — raid, tackle and defend your zone.", type: "Team" },
      { name: "Volleyball", image: "/events/volleyball.jpg", desc: "Spike, set and serve your way to victory in this team event.", type: "Team" },
      { name: "Cricket", image: "/events/cricket.jpg", desc: "A knockout cricket tournament with standard rules and full energy.", type: "Team" },
    ],
  },
  Track: {
    icon: "🏃",
    day: "Day 2 — April 3",
    fee: "₹129 per head",
    form: "https://forms.gle/FT7LHWfbqZyhg57i7",
    events: [
      { name: "200 Metres", image: "/events/200m.jpg", desc: "Sprint your heart out in this short-distance track event.", type: "Individual" },
      { name: "400 Metres", image: "/events/400m.jpg", desc: "A classic one-lap race testing speed and stamina.", type: "Individual" },
      { name: "800 Metres", image: "/events/800m.jpg", desc: "Two laps of pure endurance and tactical racing.", type: "Individual" },
      { name: "4x100 Relay", image: "/events/relay.jpg", desc: "Four runners, one baton — a test of speed and teamwork.", type: "Team" },
      { name: "Shotput", image: "/events/shotput.jpg", desc: "Put your strength to the test — throw the shot as far as you can.", type: "Individual" },
      { name: "Long Jump", image: "/events/longjump.jpg", desc: "Run, leap and land — the classic field event of distance jumping.", type: "Individual" },
    ],
  },
};

type Category = keyof typeof eventData;
type EventItem = { name: string; image: string; desc: string; type: string };

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

function EventModal({
  event,
  category,
  onClose,
}: {
  event: EventItem;
  category: Category;
  onClose: () => void;
}) {
  const cat = eventData[category];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0f0f0f",
          border: "1px solid rgba(255,122,24,0.3)",
          borderRadius: 20,
          width: "100%",
          maxWidth: 480,
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(255,122,24,0.2)",
        }}
      >
        <img
          src={event.image}
          alt={event.name}
          style={{ width: "100%", height: 220, objectFit: "cover" }}
        />
        <div style={{ padding: "28px 28px 32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {event.name}
            </h2>
            <span
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 20,
                background:
                  event.type === "Team"
                    ? "rgba(0,150,255,0.15)"
                    : "rgba(255,122,24,0.15)",
                border: `1px solid ${
                  event.type === "Team"
                    ? "rgba(0,150,255,0.4)"
                    : "rgba(255,122,24,0.4)"
                }`,
                color: event.type === "Team" ? "#007bff" : "#ff7a18",
                letterSpacing: 1,
              }}
            >
              {event.type}
            </span>
          </div>

          <p
            style={{
              color: "#888",
              fontSize: 14,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            {event.desc}
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 13,
                color: "#aaa",
              }}
            >
              📅 {cat.day}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 13,
                color: "#aaa",
              }}
            >
              💰 {cat.fee}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 13,
                color: "#aaa",
              }}
            >
              🏆 Prize TBA
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <a
              href={cat.form}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "13px 0",
                borderRadius: 25,
                textAlign: "center",
                background: "linear-gradient(45deg, #ff512f, #ff7a18)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 15,
                boxShadow: "0 0 20px rgba(255,122,24,0.4)",
              }}
            >
              Register Now
            </a>
            <button
              onClick={onClose}
              style={{
                padding: "13px 20px",
                borderRadius: 25,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#888",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [activeTab, setActiveTab] = useState<Category>("Technical");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const cat = eventData[activeTab];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 50, padding: "0 5%" }}
      >
        <p
          style={{
            color: "#ff7a18",
            letterSpacing: 4,
            fontSize: 12,
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          All Categories
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 60px)",
            fontWeight: 900,
            background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: 3,
          }}
        >
          Events
        </h1>
        <p style={{ color: "#555", fontSize: 15, marginTop: 10 }}>
          Click any event card to view details and register
        </p>
      </motion.div>

      {/* CATEGORY TABS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(8px, 2vw, 20px)",
          flexWrap: "wrap",
          marginBottom: 60,
          padding: "0 5%",
        }}
      >
        {(Object.keys(eventData) as Category[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: "12px clamp(16px, 3vw, 32px)",
              borderRadius: 30,
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(13px, 1.5vw, 16px)",
              fontWeight: 700,
              letterSpacing: 1,
              transition: "all 0.3s ease",
              background:
                activeTab === key
                  ? "linear-gradient(45deg, #ff512f, #ff7a18)"
                  : "rgba(255,255,255,0.05)",
              color: activeTab === key ? "#fff" : "#666",
              boxShadow:
                activeTab === key
                  ? "0 0 20px rgba(255,122,24,0.5)"
                  : "none",
            }}
          >
            {eventData[key].icon} {key}
          </button>
        ))}
      </motion.div>

      {/* INFO BAR */}
      <motion.div
        key={activeTab + "-info"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 50,
          padding: "0 5%",
        }}
      >
        {[
          { label: cat.day, icon: "📅" },
          { label: cat.fee, icon: "💰" },
          { label: "Open to All Colleges", icon: "🏫" },
          { label: "Prize TBA", icon: "🏆" },
        ].map(({ label, icon }) => (
          <div
            key={label}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,122,24,0.15)",
              borderRadius: 25,
              padding: "8px 20px",
              fontSize: 13,
              color: "#888",
              backdropFilter: "blur(10px)",
            }}
          >
            {icon} {label}
          </div>
        ))}
      </motion.div>

      {/* EVENTS GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={stagger}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 5%",
          }}
        >
          {cat.events.map((event) => (
            <motion.div
              key={event.name}
              variants={cardVariant}
              onClick={() => setSelectedEvent(event)}
              whileHover={{ y: -8, boxShadow: "0 0 30px rgba(255,122,24,0.5)" }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,122,24,0.15)",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={event.image}
                  alt={event.name}
                  style={{
                    width: "100%",
                    height: 170,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background:
                      event.type === "Team"
                        ? "rgba(0,150,255,0.8)"
                        : "rgba(255,122,24,0.8)",
                    borderRadius: 12,
                    padding: "3px 10px",
                    fontSize: 11,
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  {event.type}
                </div>
              </div>
              <div style={{ padding: "18px 18px 20px" }}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    marginBottom: 8,
                    background:
                      "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {event.name}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: 13,
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  {event.desc.slice(0, 60)}...
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{ color: "#ff7a18", fontSize: 12, fontWeight: 600 }}
                  >
                    {cat.fee}
                  </span>
                  <span style={{ color: "#444", fontSize: 12 }}>
                    Tap for details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* REGISTER BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginTop: 60, padding: "0 5%" }}
      >
        <a
          href={cat.form}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "15px 50px",
            borderRadius: 30,
            background: "linear-gradient(45deg, #ff512f, #ff7a18)",
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 16,
            boxShadow: "0 0 25px rgba(255,122,24,0.5)",
            letterSpacing: 1,
          }}
        >
          Register for {activeTab} Events
        </a>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            category={activeTab}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}