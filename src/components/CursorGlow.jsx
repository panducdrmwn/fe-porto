import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        // Update the position of the glow element to follow the cursor
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className="w-[800px] h-[800px] animate-[rotate_2s_infinite] bg-[linear-gradient(to_right,_aquamarine,_mediumpurple)] rounded-[50%] fixed blur-[80px] -left-40 -top-40  transition-transform opacity-[0.2] z-[0]" />;
};

export default CursorGlow;