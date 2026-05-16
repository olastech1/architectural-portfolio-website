import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        dotRef.current.style.opacity = 1;
      }
      if (ringRef.current && ringRef.current.style.opacity === '0') {
        ringRef.current.style.opacity = 1;
      }
    };

    // Smooth follow for the ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = 0;
      if (ringRef.current) ringRef.current.style.opacity = 0;
    };

    const onHoverElement = () => {
      if (ringRef.current) ringRef.current.classList.add('hovering');
    };
    const onLeaveElement = () => {
      if (ringRef.current) ringRef.current.classList.remove('hovering');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    // Add listeners to interactive elements
    const addListeners = () => {
      document.querySelectorAll('a, button, input, textarea, select, .project-card-featured, .card').forEach(el => {
        el.addEventListener('mouseenter', onHoverElement);
        el.addEventListener('mouseleave', onLeaveElement);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.querySelectorAll('a, button, input, textarea, select, .project-card-featured, .card').forEach(el => {
        el.removeEventListener('mouseenter', onHoverElement);
        el.removeEventListener('mouseleave', onLeaveElement);
      });
      observer.disconnect();
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}
