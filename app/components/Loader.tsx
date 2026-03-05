"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <img
          src="/dravyon-logo.png"
          alt="Dravyon Logo"
          className="loader-logo"
        />
        <h1 className="loader-text">DRAVYON 2K26</h1>
      </div>
    );
  }

  return <>{children}</>;
}