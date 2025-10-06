import { useEffect, useRef } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel'
}) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const duration = speed;
    track.style.setProperty('--animation-duration', `${duration}s`);
    track.style.setProperty('--animation-direction', direction === 'left' ? 'normal' : 'reverse');
  }, [speed, direction]);

  const logoElements = logos.map((logo, index) => {
    const isReactNode = logo.node;
    const content = isReactNode ? (
      <div className="logo-icon" style={{ fontSize: `${logoHeight}px` }}>
        {logo.node}
      </div>
    ) : (
      <img
        src={logo.src}
        alt={logo.alt || `Logo ${index + 1}`}
        style={{ height: `${logoHeight}px` }}
      />
    );

    return (
      <a
        key={index}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`logo-item ${scaleOnHover ? 'scale-on-hover' : ''}`}
        style={{ marginRight: `${gap}px` }}
        title={logo.title || logo.alt}
        aria-label={logo.title || logo.alt}
      >
        {content}
      </a>
    );
  });

  return (
    <div
      className={`logo-loop-container ${pauseOnHover ? 'pause-on-hover' : ''} ${fadeOut ? 'fade-out' : ''}`}
      role="region"
      aria-label={ariaLabel}
      style={{
        '--fade-color': fadeOutColor
      }}
    >
      <div ref={trackRef} className="logo-track">
        <div className="logo-group">{logoElements}</div>
        <div className="logo-group" aria-hidden="true">{logoElements}</div>
      </div>
    </div>
  );
};

export default LogoLoop;
