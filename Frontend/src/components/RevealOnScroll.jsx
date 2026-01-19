"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  distance = 12,
}) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const style =
    reduceMotion || inView
      ? {
          transition: "transform 600ms ease-out, opacity 600ms ease-out",
          transitionDelay: `${delay}ms`,
        }
      : {
          transform: `translateY(${distance}px)`,
          opacity: 0,
        };

  return (
    <div
      ref={ref}
      className={cn(
        reduceMotion || inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 will-change-transform",
        "transition-all duration-700 ease-out",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

