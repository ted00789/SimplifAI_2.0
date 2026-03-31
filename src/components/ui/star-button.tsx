"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StarBackgroundProps {
  color?: string;
}

function StarBackground({ color }: StarBackgroundProps) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      fill="none"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip)">
        <g filter="url(#filter)">
          <circle cx="271" cy="185" r="5" fill={color || "currentColor"} />
          <circle cx="141" cy="302" r="4" fill={color || "currentColor"} />
        </g>
      </g>
      <defs>
        <filter id="filter" width="200%" height="200%" x="-50%" y="-50%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <clipPath id="clip">
          <rect width="400" height="400" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface StarButtonProps {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  className?: string;
  onClick?: () => void;
}

export function StarButton({
  children,
  lightWidth = 110,
  duration = 3,
  lightColor = "hsl(var(--primary))",
  backgroundColor = "hsl(var(--card))",
  borderWidth = 2,
  className,
  ...props
}: StarButtonProps) {
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const div = pathRef.current;
      div.style.setProperty(
        "--path",
        `path('M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0')`,
      );
    }
  }, []);

  return (
    <div
      ref={pathRef}
      className={cn("relative inline-flex rounded-xl overflow-hidden", className)}
      style={
        {
          "--duration": duration,
          "--light-width": lightWidth,
          "--light-color": lightColor,
          "--bg-color": backgroundColor,
          "--border-width": `${borderWidth}px`,
          padding: `${borderWidth}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      <StarBackground color={lightColor} />

      <div
        className="absolute inset-0 rounded-xl"
        style={{ background: backgroundColor }}
      />

      <div
        className="animate-star-btn absolute"
        style={{
          offsetPath: "var(--path)",
          width: `${lightWidth}px`,
          height: "100%",
          background: `linear-gradient(${lightColor}, transparent)`,
          filter: "blur(4px)",
        }}
      />

      <div
        className="relative z-10 rounded-[calc(0.75rem-var(--border-width))] w-full"
        style={{ background: backgroundColor }}
      >
        {children}
      </div>
    </div>
  );
}
