"use client";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes whatsappPulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .whatsapp-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c7e);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 0 20px rgba(37,211,102,0.5);
          z-index: 9998;
          text-decoration: none;
          transition: all 0.3s ease;
          animation: whatsappPulse 2s infinite;
        }
        .whatsapp-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(37,211,102,0.8);
        }
      `}</style>
      <a href="https://wa.me/919884054678" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <span>&#128172;</span>
      </a>
    </>
  );
}