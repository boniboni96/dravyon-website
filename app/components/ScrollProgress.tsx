"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0,
      width: "100%", height: 3,
      background: "rgba(255,255,255,0.05)",
      zIndex: 9999,
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
        boxShadow: "0 0 10px #ff7a18",
        transition: "width 0.1s linear",
      }} />
    </div>
  );
}