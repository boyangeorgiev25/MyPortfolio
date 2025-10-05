import React, { useEffect, useRef } from 'react';
import './InfiniteScroll.css';

function InfiniteScroll({
  items = [],
  isTilted = false,
  tiltDirection = 'left',
  autoplay = true,
  autoplaySpeed = 0.1,
  autoplayDirection = 'down',
  pauseOnHover = true
}) {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!autoplay || !scrollRef.current) return;

    let scrollPosition = 0;
    const container = scrollRef.current;
    const scrollHeight = container.scrollHeight / 2;

    const scroll = () => {
      if (autoplayDirection === 'down') {
        scrollPosition += autoplaySpeed;
        if (scrollPosition >= scrollHeight) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= autoplaySpeed;
        if (scrollPosition <= 0) {
          scrollPosition = scrollHeight;
        }
      }
      container.scrollTop = scrollPosition;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, autoplayDirection]);

  const handleMouseEnter = () => {
    if (pauseOnHover && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay && scrollRef.current) {
      let scrollPosition = scrollRef.current.scrollTop;
      const container = scrollRef.current;
      const scrollHeight = container.scrollHeight / 2;

      const scroll = () => {
        if (autoplayDirection === 'down') {
          scrollPosition += autoplaySpeed;
          if (scrollPosition >= scrollHeight) {
            scrollPosition = 0;
          }
        } else {
          scrollPosition -= autoplaySpeed;
          if (scrollPosition <= 0) {
            scrollPosition = scrollHeight;
          }
        }
        container.scrollTop = scrollPosition;
        animationRef.current = requestAnimationFrame(scroll);
      };

      animationRef.current = requestAnimationFrame(scroll);
    }
  };

  const doubledItems = [...items, ...items];

  return (
    <div
      className={`infinite-scroll-container ${isTilted ? `tilted-${tiltDirection}` : ''}`}
      ref={scrollRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="infinite-scroll-content">
        {doubledItems.map((item, index) => (
          <div key={index} className="infinite-scroll-item">
            {typeof item.content === 'string' ? (
              <p>{item.content}</p>
            ) : (
              item.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;
