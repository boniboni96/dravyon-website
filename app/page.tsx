"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "./Loader";

export default function Home() {

  /* ---------------- LOADER STATE ---------------- */

  const [loading, setLoading] = useState(true);

  /* ---------------- COUNTDOWN STATE ---------------- */

  const targetDate = new Date("April 2, 2026 09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  /* ---------------- LOADER EFFECT ---------------- */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  /* ---------------- COUNTDOWN EFFECT ---------------- */

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  /* ---------------- LOADER DISPLAY ---------------- */

  if (loading) {
    return <Loader />;
  }

  /* ---------------- PAGE CONTENT ---------------- */

  return (
    <div className="home-wrapper">

      {/* BACKGROUND VIDEO */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/phoenix.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* CENTER CONTENT */}
      <div className="home-content">

        <h1>DRAVYON 2K26</h1>

        <p className="tagline">
          National Level Technical Symposium
        </p>

        <p className="event-date">
          April 2 – 3, 2026
        </p>

        {/* COUNTDOWN TIMER */}

        <div className="countdown">

          <div>
            <h3>{timeLeft.days}</h3>
            <p>Days</p>
          </div>

          <div>
            <h3>{timeLeft.hours}</h3>
            <p>Hours</p>
          </div>

          <div>
            <h3>{timeLeft.minutes}</h3>
            <p>Minutes</p>
          </div>

          <div>
            <h3>{timeLeft.seconds}</h3>
            <p>Seconds</p>
          </div>

        </div>

        <Link href="/events" className="explore-btn">
          Explore Events
        </Link>

      </div>

    </div>
  );
}