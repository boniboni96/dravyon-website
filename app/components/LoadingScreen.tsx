"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <img src="/dravyon-logo.png" alt="Dravyon Logo" className="loading-logo" />
      <p className="loading-text">DRAVYON 2K26</p>
    </div>
  );
}