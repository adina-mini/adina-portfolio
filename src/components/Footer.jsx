import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [butterflyPos, setButterflyPos] = useState({ x: 0, y: 0 });
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [pawprints, setPawprints] = useState([]);
  const butterflyRef = useRef(null);
  const catRef = useRef(null);
  const rafRef = useRef(null);
  const pawIdRef = useRef(0);
  const sideRef = useRef(0);

  // Butterfly tracking for pupils
  useEffect(() => {
    const track = () => {
      if (butterflyRef.current) {
        const rect = butterflyRef.current.getBoundingClientRect();
        setButterflyPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
      rafRef.current = requestAnimationFrame(track);
    };
    rafRef.current = requestAnimationFrame(track);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const eyeScreenX = window.innerWidth * 0.5;
    const eyeScreenY = window.innerHeight - 60;

    const dx = butterflyPos.x - eyeScreenX;
    const dy = butterflyPos.y - eyeScreenY;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

    const maxMove = 1.3;
    const moveX = (dx / dist) * maxMove;
    const moveY = (dy / dist) * maxMove * 0.7;

    setPupilOffset({ x: moveX, y: moveY });
  }, [butterflyPos]);

  // 🐾 Spawn a pawprint from the cat's LIVE position every ~520ms
  useEffect(() => {
    const interval = setInterval(() => {
      if (!catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const pawX = rect.right - 18;
      const pawY = window.innerHeight - rect.bottom + 4;

      const id = pawIdRef.current++;
      const isLeft = sideRef.current === 0;
      sideRef.current = 1 - sideRef.current;

      setPawprints((prev) => [
        ...prev.slice(-14),
        {
          id,
          x: pawX,
          y: pawY,
          isLeft,
          born: Date.now(),
        },
      ]);
    }, 520);

    return () => clearInterval(interval);
  }, []);

  // Cleanup old pawprints after 3.2s
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setPawprints((prev) => prev.filter((p) => now - p.born < 3200));
    }, 400);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <footer className="relative py-6 border-t border-beige/10 overflow-hidden bg-[#0B0B0B]">
      <style>{`
        @keyframes travelAcross {
          0%   { transform: translateX(calc(100vw + 20px)); }
          100% { transform: translateX(-200px); }
        }

        @keyframes blinkLeft {
          0%, 91%, 100% { transform: scaleY(1); }
          94%           { transform: scaleY(0.08); }
          97%           { transform: scaleY(1); }
        }
        @keyframes blinkRight {
          0%, 91.5%, 100% { transform: scaleY(1); }
          94.5%           { transform: scaleY(0.08); }
          97.5%           { transform: scaleY(1); }
        }

        @keyframes legSwingA {
          0%   { transform: rotate(18deg); }
          50%  { transform: rotate(-16deg); }
          100% { transform: rotate(18deg); }
        }
        @keyframes legSwingB {
          0%   { transform: rotate(-16deg); }
          50%  { transform: rotate(18deg); }
          100% { transform: rotate(-16deg); }
        }

        @keyframes bodyBob {
          0%, 100% { transform: translateY(0px); }
          25%      { transform: translateY(-1.6px); }
          50%      { transform: translateY(-0.4px); }
          75%      { transform: translateY(-1.2px); }
        }

        @keyframes tailSway {
          0%, 100% { transform: rotate(-5deg); }
          35%      { transform: rotate(7deg); }
          70%      { transform: rotate(-2deg); }
        }

        @keyframes headChase {
          0%, 100% { transform: translate(1.2px, 0) rotate(0.6deg); }
          30%      { transform: translate(2.4px, -1px) rotate(-0.7deg); }
          65%      { transform: translate(1.8px, -0.4px) rotate(0.2deg); }
        }

        @keyframes bellSwing {
          0%, 100% { transform: rotate(-14deg); }
          50%      { transform: rotate(14deg); }
        }
        @keyframes bellGlint {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          45%      { opacity: 1;    transform: scale(1.25); }
          60%      { opacity: 1;    transform: scale(1.15); }
        }

        @keyframes butterflyPath {
          0%   { transform: translate(0, 0) rotate(0deg); }
          15%  { transform: translate(-4px, -8px) rotate(-4deg); }
          30%  { transform: translate(-8px, 1px) rotate(3deg); }
          45%  { transform: translate(-12px, -7px) rotate(-3deg); }
          60%  { transform: translate(-16px, 0px) rotate(2deg); }
          75%  { transform: translate(-12px, -6px) rotate(-3deg); }
          90%  { transform: translate(-18px, 2px) rotate(2deg); }
          100% { transform: translate(-22px, 0px) rotate(0deg); }
        }
        @keyframes butterflyFlutter {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-1.6px); }
        }
        @keyframes wingFlapLeft {
          0%, 100% { transform: scaleX(1); }
          45%      { transform: scaleX(0.25); }
          50%      { transform: scaleX(0.3); }
        }
        @keyframes wingFlapRight {
          0%, 100% { transform: scaleX(1); }
          45%      { transform: scaleX(0.25); }
          50%      { transform: scaleX(0.3); }
        }

        @keyframes trailFade1 {
          0%, 100% { opacity: 0.55; transform: translate(0, 0) scale(1); }
          50%      { opacity: 0.15; transform: translate(2px, -1px) scale(0.85); }
        }
        @keyframes trailFade2 {
          0%, 100% { opacity: 0.38; transform: translate(0, 0) scale(1); }
          50%      { opacity: 0.1;  transform: translate(4px, 0px) scale(0.8); }
        }
        @keyframes trailFade3 {
          0%, 100% { opacity: 0.22; transform: translate(0, 0) scale(1); }
          50%      { opacity: 0.05; transform: translate(6px, 1px) scale(0.75); }
        }

        @keyframes butterflyDip {
          0%, 55%, 100% { transform: translateY(0); }
          70%, 80%      { transform: translateY(9px); }
        }

        @keyframes sparkleDrift {
          0%   { opacity: 0; transform: translate(0, 0) scale(0.8); }
          20%  { opacity: 0.3; transform: translate(-5px, -2px) scale(1); }
          80%  { opacity: 0.3; transform: translate(-22px, -6px) scale(1); }
          100% { opacity: 0; transform: translate(-30px, -8px) scale(0.8); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 0.55; }
        }

        @keyframes shadowPulse {
          0%, 100% { opacity: 0.55; transform: scaleX(1); }
          50%      { opacity: 0.45; transform: scaleX(0.96); }
        }
        .cat-shadow {
          animation: shadowPulse 0.65s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        /* 🐾 PAWPRINT */
        @keyframes pawAppear {
          0%   { opacity: 0;    transform: scale(0.4) rotate(var(--rot, 0deg)); }
          12%  { opacity: 0.85; transform: scale(1)   rotate(var(--rot, 0deg)); }
          55%  { opacity: 0.55; transform: scale(1)   rotate(var(--rot, 0deg)); }
          100% { opacity: 0;    transform: scale(0.9) rotate(var(--rot, 0deg)); }
        }

        .pawprint {
          position: fixed;
          pointer-events: none;
          z-index: 48;
          animation: pawAppear 3.2s ease-out forwards;
          transform-origin: center;
        }

        /* ---------- POSITIONS ---------- */
        .cat-walker {
          position: fixed;
          bottom: 6px;
          left: 175px;
          z-index: 50;
          pointer-events: none;
          animation: travelAcross 26s linear infinite;
          transform-origin: bottom center;
        }
        .cat-flip {
          transform: scaleX(-1);
          transform-origin: bottom center;
          display: inline-block;
        }
        .butterfly-walker {
          position: fixed;
          bottom: 62px;
          left: 40px;
          z-index: 51;
          pointer-events: none;
          animation: travelAcross 26s linear infinite;
          transform-origin: bottom center;
        }
        .butterfly-flip {
          transform: scaleX(-1);
          transform-origin: center;
          display: inline-block;
        }

        /* Cat inner animations */
        .cat-tail {
          animation: tailSway 1.95s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: bottom right;
        }
        .cat-head {
          animation: headChase 1.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        .cat-body {
          animation: bodyBob 0.65s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .cat-eyelid-left {
          animation: blinkLeft 5.4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .cat-eyelid-right {
          animation: blinkRight 5.4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .cat-pupils { transition: transform 0.12s ease-out; }
        .cat-bell {
          animation: bellSwing 1.2s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: top center;
        }
        .cat-bell-glint {
          animation: bellGlint 2.2s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .cat-leg-fl {
          animation: legSwingA 0.65s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: top center;
        }
        .cat-leg-fr {
          animation: legSwingB 0.65s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: top center;
        }
        .cat-leg-bl {
          animation: legSwingB 0.65s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: top center;
        }
        .cat-leg-br {
          animation: legSwingA 0.65s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: top center;
        }
        .cat-leg-bl path { opacity: 0.85; }

        /* Butterfly inner animations */
        .butterfly-path   { animation: butterflyPath 4.5s ease-in-out infinite alternate; display: inline-block; }
        .butterfly-dip    { animation: butterflyDip 4.5s ease-in-out infinite; display: inline-block; }
        .butterfly-inner  { animation: butterflyFlutter 0.9s ease-in-out infinite; display: inline-block; }
        .butterfly-wing-left {
          animation: wingFlapLeft 0.24s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: right center;
        }
        .butterfly-wing-right {
          animation: wingFlapRight 0.24s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: left center;
        }

        .trail-dot-1 { animation: trailFade1 1.3s ease-in-out infinite; }
        .trail-dot-2 { animation: trailFade2 1.3s ease-in-out infinite 0.16s; }
        .trail-dot-3 { animation: trailFade3 1.3s ease-in-out infinite 0.32s; }

        .sparkle {
          position: fixed;
          border-radius: 50%;
          background: #F1E8CE;
          pointer-events: none;
          z-index: 45;
          animation: sparkleDrift 9s ease-in-out infinite, sparkleTwinkle 2.4s ease-in-out infinite;
        }
        .sparkle-1 { bottom: 40px; left: 30%;  width: 3px; height: 3px; animation-delay: 0s, 0s; }
        .sparkle-2 { bottom: 70px; left: 62%;  width: 2px; height: 2px; animation-delay: 2.5s, 0.7s; }
        .sparkle-3 { bottom: 55px; left: 82%;  width: 2.5px; height: 2.5px; animation-delay: 5s, 1.3s; }

        @media (max-width: 768px) {
          .cat-walker       { left: 140px; }
          .butterfly-walker { bottom: 56px; left: 30px; }
          .sparkle          { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cat-walker, .butterfly-walker, .cat-tail, .cat-head, .cat-body,
          .cat-eyelid-left, .cat-eyelid-right, .cat-bell, .cat-bell-glint,
          .cat-leg-fl, .cat-leg-fr, .cat-leg-bl, .cat-leg-br,
          .butterfly-path, .butterfly-dip, .butterfly-inner,
          .butterfly-wing-left, .butterfly-wing-right,
          .trail-dot-1, .trail-dot-2, .trail-dot-3,
          .sparkle, .cat-shadow, .pawprint {
            animation: none !important;
          }
        }
      `}</style>

      {/* Ambient sparkles */}
      <div className="sparkle sparkle-1" />
      <div className="sparkle sparkle-2" />
      <div className="sparkle sparkle-3" />

      {/* 🐾 PAWPRINT TRAIL */}
      {pawprints.map((p) => (
        <div
          key={p.id}
          className="pawprint"
          style={{
            left: `${p.x}px`,
            bottom: `${p.y}px`,
            ['--rot']: p.isLeft ? '-10deg' : '8deg',
          }}
        >
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
            <ellipse cx="5.5" cy="9" rx="2.8" ry="2.4" fill="#8B5E7C" opacity="0.75" />
            <circle cx="2.4" cy="5" r="1.15" fill="#8B5E7C" opacity="0.75" />
            <circle cx="5.5" cy="3.8" r="1.2" fill="#8B5E7C" opacity="0.75" />
            <circle cx="8.6" cy="5" r="1.15" fill="#8B5E7C" opacity="0.75" />
          </svg>
        </div>
      ))}

      {/* BUTTERFLY */}
      <div className="butterfly-walker" ref={butterflyRef}>
        <div className="butterfly-flip">
          <div className="butterfly-dip">
            <div className="butterfly-path">
              <div className="butterfly-inner">
                <svg
                  width="30"
                  height="20"
                  viewBox="-10 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', left: '-8px', top: '0px' }}
                  aria-hidden="true"
                >
                  <circle className="trail-dot-1" cx="0" cy="10" r="1.6" fill="#8B5E7C" opacity="0.5" />
                  <circle className="trail-dot-2" cx="-4" cy="10.5" r="1.2" fill="#8B5E7C" opacity="0.35" />
                  <circle className="trail-dot-3" cx="-8" cy="11" r="0.9" fill="#8B5E7C" opacity="0.2" />
                </svg>

                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g className="butterfly-wing-left">
                    <path d="M12 10 C 6 2, 0 2, 0 7 C 0 11, 5 13, 12 11 Z" fill="#73505F" opacity="0.95" />
                    <path d="M12 10 C 6 2, 0 2, 0 7 C 0 11, 5 13, 12 11 Z" fill="none" stroke="#3A2630" strokeWidth="0.4" opacity="0.7" />
                    <path d="M12 12 C 6 13, 2 15, 3 18.5 C 5.5 21, 10 18.5, 12 13 Z" fill="#8B5E7C" opacity="0.9" />
                    <circle cx="5.5" cy="7.5" r="0.85" fill="#F1E8CE" opacity="0.95" />
                  </g>
                  <g className="butterfly-wing-right">
                    <path d="M12 10 C 18 2, 24 2, 24 7 C 24 11, 19 13, 12 11 Z" fill="#73505F" opacity="0.95" />
                    <path d="M12 10 C 18 2, 24 2, 24 7 C 24 11, 19 13, 12 11 Z" fill="none" stroke="#3A2630" strokeWidth="0.4" opacity="0.7" />
                    <path d="M12 12 C 18 13, 22 15, 21 18.5 C 18.5 21, 14 18.5, 12 13 Z" fill="#8B5E7C" opacity="0.9" />
                    <circle cx="18.5" cy="7.5" r="0.85" fill="#F1E8CE" opacity="0.95" />
                  </g>
                  <ellipse cx="12" cy="12" rx="0.85" ry="3.2" fill="#211D22" />
                  <circle cx="12" cy="8.4" r="1.05" fill="#211D22" />
                  <path d="M11.6 7.6 Q 10 5.4, 8.8 4.6" stroke="#211D22" strokeWidth="0.45" fill="none" strokeLinecap="round" />
                  <path d="M12.4 7.6 Q 14 5.4, 15.2 4.6" stroke="#211D22" strokeWidth="0.45" fill="none" strokeLinecap="round" />
                  <circle cx="8.8" cy="4.6" r="0.45" fill="#F1E8CE" />
                  <circle cx="15.2" cy="4.6" r="0.45" fill="#F1E8CE" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CAT */}
      <div className="cat-walker">
        <div className="cat-flip" ref={catRef}>
          <svg
            width="72"
            height="80"
            viewBox="0 0 150 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g id="tail" className="cat-tail">
              <path
                d="M32 118 C 12 116, 4 96, 14 78 C 22 64, 40 62, 44 76 C 46 84, 40 90, 34 88 C 30 87, 28 82, 31 79"
                stroke="#292329" strokeWidth="8.5" strokeLinecap="round" fill="none"
              />
              <path
                d="M32 118 C 12 116, 4 96, 14 78 C 22 64, 40 62, 44 76 C 46 84, 40 90, 34 88 C 30 87, 28 82, 31 79"
                stroke="#342D34" strokeWidth="3.6" strokeLinecap="round" fill="none" opacity="0.5"
              />
              <path
                d="M40 66 C 44 68, 46 74, 42 78"
                stroke="#4A414A" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.7"
              />
            </g>

            <g id="body" className="cat-body">
              <path
                d="M38 108 C 38 92, 46 80, 66 78 L 98 78 C 110 78, 116 86, 116 98 L 116 116 C 116 122, 110 126, 102 126 L 46 126 C 40 126, 38 122, 38 116 Z"
                fill="#292329"
              />
              <path
                d="M42 96 C 42 86, 50 82, 64 80 L 78 80 C 68 84, 56 92, 52 106 C 46 104, 42 100, 42 96 Z"
                fill="#342D34" opacity="0.5"
              />
              <path
                d="M46 124 L 112 124 C 110 126, 106 126, 102 126 L 46 126 C 44 126, 42 125, 42 124 Z"
                fill="#211D22" opacity="0.9"
              />
            </g>

            <g id="leg-back-left" className="cat-leg-bl">
              <path
                d="M92 122 C 92 116, 96 112, 100 112 L 106 112 C 110 112, 112 116, 112 122 L 110 132 C 110 134, 108 136, 106 136 L 100 136 C 97 136, 95 134, 95 132 Z"
                fill="#211D22"
              />
              <ellipse cx="103" cy="134" rx="4.5" ry="1" fill="#8B5E7C" opacity="0.55" />
            </g>
            <g id="leg-back-right" className="cat-leg-br">
              <path
                d="M78 122 C 78 117, 81 113, 85 113 L 89 113 C 93 113, 95 117, 95 122 L 94 132 C 94 134, 92 136, 90 136 L 85 136 C 82 136, 80 134, 80 132 Z"
                fill="#292329"
              />
              <ellipse cx="87" cy="134" rx="4" ry="1" fill="#8B5E7C" opacity="0.55" />
            </g>

            <g id="leg-front-left" className="cat-leg-fl">
              <path
                d="M52 122 C 52 117, 55 113, 59 113 L 63 113 C 67 113, 69 117, 69 122 L 68 132 C 68 134, 66 136, 64 136 L 59 136 C 56 136, 54 134, 54 132 Z"
                fill="#211D22"
              />
              <ellipse cx="61" cy="134" rx="4" ry="1" fill="#8B5E7C" opacity="0.55" />
            </g>
            <g id="leg-front-right" className="cat-leg-fr">
              <path
                d="M64 122 C 64 117, 67 113, 71 113 L 75 113 C 79 113, 81 117, 81 122 L 80 132 C 80 134, 78 136, 76 136 L 71 136 C 68 136, 66 134, 66 132 Z"
                fill="#292329"
              />
              <ellipse cx="73" cy="134" rx="4" ry="1" fill="#8B5E7C" opacity="0.55" />
            </g>

            <g id="head" className="cat-head">
              <path
                d="M64 46 C 64 32, 76 24, 92 24 C 108 24, 120 32, 120 46 C 120 58, 112 68, 100 70 L 84 70 C 72 68, 64 58, 64 46 Z"
                fill="#292329"
              />
              <path
                d="M70 40 C 74 32, 82 28, 92 28 C 86 32, 80 38, 78 46 C 74 46, 71 43, 70 40 Z"
                fill="#342D34" opacity="0.5"
              />

              <g id="ear-left">
                <path d="M72 30 L 68 8 L 86 24 Z" fill="#292329" />
                <path d="M74 28 L 71 13 L 83 24 Z" fill="#73505F" />
              </g>
              <g id="ear-right">
                <path d="M108 30 L 112 8 L 96 24 Z" fill="#292329" />
                <path d="M106 28 L 109 13 L 98 24 Z" fill="#73505F" />
              </g>

              <g id="eye-white-left">
                <path d="M80 44 C 82.5 38.5, 91 38.5, 93.5 44 C 91 49.5, 82.5 49.5, 80 44 Z" fill="#F1E8CE" />
              </g>
              <g id="eye-white-right">
                <path d="M98 44 C 100.5 38.5, 109 38.5, 111.5 44 C 109 49.5, 100.5 49.5, 98 44 Z" fill="#F1E8CE" />
              </g>

              <g
                id="pupils"
                className="cat-pupils"
                style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}
              >
                <g id="pupil-left">
                  <circle cx="87" cy="44" r="2" fill="#171419" />
                  <circle cx="87.6" cy="43.3" r="0.65" fill="#FFF7DD" />
                </g>
                <g id="pupil-right">
                  <circle cx="105" cy="44" r="2" fill="#171419" />
                  <circle cx="105.6" cy="43.3" r="0.65" fill="#FFF7DD" />
                </g>
              </g>

              <g id="eyelid-left" className="cat-eyelid-left">
                <path d="M79 44 C 82.5 38, 91.5 38, 94.5 44 C 91 40, 82.5 40, 79 44 Z" fill="#292329" />
              </g>
              <g id="eyelid-right" className="cat-eyelid-right">
                <path d="M97 44 C 100.5 38, 109.5 38, 112.5 44 C 109 40, 100.5 40, 97 44 Z" fill="#292329" />
              </g>

              <g id="collar">
                <path d="M74 66 C 82 72, 100 72, 110 66 L 108 72 C 98 78, 84 78, 76 72 Z" fill="#704956" />
                <path d="M74 66 C 82 72, 100 72, 110 66" stroke="#3A2630" strokeWidth="0.8" fill="none" opacity="0.6" />
              </g>

              <g id="bell" className="cat-bell">
                <circle cx="92" cy="76" r="3.6" fill="#D8C69C" />
                <circle cx="92" cy="76" r="3.6" fill="none" stroke="#3A2630" strokeWidth="0.6" opacity="0.7" />
                <circle
                  className="cat-bell-glint"
                  cx="91" cy="75" r="1.1" fill="#FFF7DD" opacity="0.85"
                />
              </g>
            </g>

            <g id="ground-shadow">
              <ellipse
                className="cat-shadow"
                cx="82" cy="138" rx="42" ry="3"
                fill="#171418" opacity="0.55"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Butterfly ground shadow */}
      <div
        className="butterfly-walker"
        style={{
          bottom: '54px',
          animation: 'travelAcross 26s linear infinite',
          zIndex: 49,
        }}
        aria-hidden="true"
      >
        <div className="butterfly-flip">
          <svg width="22" height="6" viewBox="0 0 22 6" fill="none">
            <ellipse cx="11" cy="3" rx="9" ry="1.5" fill="#8B5E7C" opacity="0.25" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center text-beige/40 text-sm pt-10">
        <p>© {new Date().getFullYear()} Adina Rehman. Built with ❤️ and Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;