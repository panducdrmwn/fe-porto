import { useState, useRef } from "react";
const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const RandomizeTextOnHover = ({ originalText }) => {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef(null);
  let iteration = 0;

  const handleMouseEnter = () => {
    // Clear any existing interval
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => {
        return prevText.split('')
          .map((character, index) => {
            if (index < iteration) {
              return originalText[index]; // Reveal original character
            }
            // Replace with random character
            return randomChars[Math.floor(Math.random() * randomChars.length)];
          })
          .join('');
      });
      
      // Stop the animation once all characters are revealed
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3; // Adjust the speed of character reveal
    }, 30); // Adjust interval time for desired speed (e.g., 30ms)
  };


 const handleMouseLeave = () => {
    // Stop the randomization process immediately or let it finish and then reset
    clearInterval(intervalRef.current);
    // Optional: Reset to original text immediately on mouse leave
    setDisplayText(originalText); 
    iteration = 0;
  };

  return (
    <h1 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      
        className=" font-mono font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
         text-5xl md:text-7xl"
    >
        
      {displayText}
    </h1>
  );
}