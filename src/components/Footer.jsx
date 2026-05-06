import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Message stays for 8 seconds before fading
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative py-6 border-t border-beige/10 overflow-hidden bg-[#0B0B0B]">
      <style>{`
        @keyframes catRun {
          0% {
            transform: translateX(calc(100vw - 50px));
          }
          100% {
            transform: translateX(-50px);
          }
        }
        
        @keyframes dogRun {
          0% {
            transform: translateX(calc(100vw - 100px));
          }
          100% {
            transform: translateX(-100px);
          }
        }
        
        @keyframes messageFade {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        
        .cat {
          animation: catRun 10s linear infinite;
          position: fixed;
          bottom: 8px;
          font-size: 28px;
          z-index: 50;
          pointer-events: none;
        }
        
        .dog {
          animation: dogRun 10s linear infinite;
          position: fixed;
          bottom: 8px;
          font-size: 28px;
          z-index: 50;
          pointer-events: none;
        }
        
        .greeting {
          position: fixed;
          bottom: 70px;
          right: 20px;
          background-color: #8B5E7C;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 500;
          color: #E7D7C1;
          white-space: nowrap;
          animation: messageFade 8s ease-out forwards;
          pointer-events: none;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .cat, .dog { font-size: 22px; }
          .greeting { 
            font-size: 14px; 
            padding: 5px 14px; 
            bottom: 60px;
            right: 15px;
          }
          @keyframes catRun {
            0% { transform: translateX(calc(100vw - 35px)); }
            100% { transform: translateX(-35px); }
          }
          @keyframes dogRun {
            0% { transform: translateX(calc(100vw - 70px)); }
            100% { transform: translateX(-70px); }
          }
        }
      `}</style>
      
      {/* Cat - right to left */}
      <div className="cat">🐈‍⬛</div>
      
      {/* Dog - right to left, stays behind cat */}
      <div className="dog">🐕</div>
      
      {/* Small greeting message - bottom right, plum color, palm emoji only */}
      {showMessage && (
        <div className="greeting">
          <span>🤚</span>
          <span>hi & thanks</span>
        </div>
      )}

      <div className="relative z-10 text-center text-beige/40 text-sm pt-10">
        <p>© {new Date().getFullYear()} Adina Rehman. Built with ❤️ and Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;