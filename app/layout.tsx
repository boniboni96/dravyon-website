import "./globals.css";
import AOSInit from "./components/AOSInit";
import ParticleBackground from "./components/ParticleBackground";
import FireCursor from "./components/FireCursor";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "DRAVYON 2K26",
  description: "National Level Technical Symposium — April 2-3, 2026 | Saveetha University",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>

        <AOSInit />
        <ParticleBackground />
        <FireCursor />
        <ScrollProgress />
        <WhatsAppButton />

        <div className="glow-bg" />

        <Navbar />

        <main className="main-content">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <Footer />

      </body>
    </html>
  );
}