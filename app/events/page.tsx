"use client";

import { useState } from "react";

const eventData = {
  Technical: [
    { name: "Logo Designing", image: "/events/logo-designing.jpg" },
    { name: "Electro Quiz", image: "/events/electro-quiz.jpg" },
    { name: "Tech Debate", image: "/events/tech-debate.jpg" },
    { name: "Shadow Coder", image: "/events/shadow-coder.jpg" },
    { name: "Sketch a Tech", image: "/events/sketch-tech.jpg" },
    { name: "Paper Presentation", image: "/events/paper-presentation.jpg" },
  ],

  "Non-Tech": [
    { name: "Fashion Walk", image: "/events/fashion-walk.jpg" },
    { name: "Dance", image: "/events/dance.jpg" },
    { name: "Connexions", image: "/events/connexions.jpg" },
    { name: "FF / Chess", image: "/events/chess.jpg" },
    { name: "Quest X", image: "/events/questx.jpg" },
    { name: "Singing", image: "/events/singing.jpg" },
    { name: "Box Cricket", image: "/events/box-cricket.jpg" },
    { name: "Photo Hunt", image: "/events/photo-hunt.jpg" },
  ],

  Sports: [
    { name: "Cricket", image: "/events/cricket.jpg" },
    { name: "Volley Ball", image: "/events/volleyball.jpg" },
    { name: "Kabaddi", image: "/events/kabaddi.jpg" },
    { name: "Football", image: "/events/football.jpg" },
    { name: "Throw Ball", image: "/events/throwball.jpg" },
    { name: "Basket Ball", image: "/events/basketball.jpg" },
  ],

  Track: [
    { name: "200 mts", image: "/events/200m.jpg" },
    { name: "400 mts", image: "/events/400m.jpg" },
    { name: "800 mts", image: "/events/800m.jpg" },
    { name: "4x100 Relay", image: "/events/relay.jpg" },
    { name: "Shotput", image: "/events/shotput.jpg" },
    { name: "Long Jump", image: "/events/longjump.jpg" },
  ],
};

export default function Events() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof eventData>("Technical");

  return (
    <div className="events-page">

      <h1 className="events-title">Events</h1>

      {/* CATEGORY BUTTONS */}

      <div className="event-tabs">
        {Object.keys(eventData).map((category) => (
          <button
            key={category}
            className={` ${activeTab === category ? "active" : ""}`}
            onClick={() =>
              setActiveTab(category as keyof typeof eventData)
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* EVENTS GRID */}

      <div className="events-grid">
        {eventData[activeTab].map((event, index) => (
          <div key={index} className="event-card">

            <img
              src={event.image}
              alt={event.name}
              className="event-image"
            />

            <h3>{event.name}</h3>

            <a
              href={
                activeTab === "Sports"
                  ? "https://forms.gle/z4i1jqviHwx2Rru9A"
                  : activeTab === "Track"
                  ? "https://forms.gle/FT7LHWfbqZyhg57i7"
                  : "https://forms.gle/VNdguH4seYbX1wGQ9"
              }
              target="_blank"
              className="register-btn"
            >
              Register
            </a>

          </div>
        ))}
      </div>

    </div>
  );
}