
import { useEffect, useRef } from "react";
import { wavyText } from "@/lib/animate";

interface WavyTextProps {
  text: string;
  className?: string;
}

export function WavyText({ text, className = "" }: WavyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      wavyText(`#${containerRef.current.id}`);
    }
  }, []);
  
  const id = `wavy-text-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div id={id} ref={containerRef} className={className}>
      {text.split("").map((char, index) => (
        <span 
          key={index} 
          className={`wavy-letter inline-block ${char === " " ? "mr-1" : ""}`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
