"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        particles: {
          number: {
            value: 60
          },

          color: {
            value: ["#ff3c00","#ff7b00","#ffaa00"]
          },

          size: {
            value: { min: 1, max: 4 }
          },

          move: {
            enable: true,
            speed: 1,
            direction: "top",
            outModes: {
              default: "out"
            }
          },

          opacity: {
            value: { min: 0.3, max: 0.8 }
          }
        },

        background: {
          color: "transparent"
        }
      }}
    />
  );
}