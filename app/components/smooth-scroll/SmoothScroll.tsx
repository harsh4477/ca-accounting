import React, { useEffect, useRef } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollDataRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`;
    };

    setBodyHeight();

    const handleResize = () => {
      setBodyHeight();
    };

    const handleScroll = () => {
      scrollDataRef.current.target = window.scrollY || window.pageYOffset;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    const ease = 0.08;

    const update = () => {
      const { current, target } = scrollDataRef.current;
      const next = current + (target - current) * ease;
      scrollDataRef.current.current = next;

      if (container) {
        container.style.transform = `translate3d(0, ${-next}px, 0)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(update);
    };

    animationFrameRef.current = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      document.body.style.height = "";
      if (container) {
        container.style.transform = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
