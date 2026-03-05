"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2026-04-15T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="countdown">
      <div><h2>{days}</h2><p>Days</p></div>
      <div><h2>{hours}</h2><p>Hours</p></div>
      <div><h2>{minutes}</h2><p>Minutes</p></div>
      <div><h2>{seconds}</h2><p>Seconds</p></div>
    </div>
  );
}