import React, { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  let counterRef = useRef(null);

  // start counting when element comes into view
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setTimeout(() => {
            startCounting();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  const startCounting = () => {
    let startTime = Date.now();
    let startValue = 0;
    let endValue = parseInt(end);

    function updateCount() {
      let currentTime = Date.now();
      let elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      // math to make the counting look smooth
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={counterRef} className="stat-number">
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;