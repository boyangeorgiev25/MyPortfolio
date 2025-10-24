import React from 'react';
import '../../styles/components/glass-surface.css';

const GlassSurface = ({
  children,
  width = 300,
  height = 200,
  borderRadius = 24,
  displace = 10,
  distortionScale = -100,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  brightness = 50,
  opacity = 0.7,
  mixBlendMode = 'normal',
  className = ''
}) => {
  const filterId = `glass-filter-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={`glass-surface ${className}`}
      style={{
        width: width === 'auto' ? 'auto' : `${width}px`,
        height: height === 'auto' ? 'auto' : `${height}px`,
        borderRadius: `${borderRadius}px`,
        opacity,
        mixBlendMode
      }}
    >
      <svg className="glass-svg" width="0" height="0">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={displace}
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              type="matrix"
              values={`1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 ${opacity} 0`}
              result="matrix"
            />
            <feComposite in="matrix" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id={`${filterId}-chromatic`}>
            <feOffset in="SourceGraphic" dx={redOffset} dy="0" result="red" />
            <feOffset in="SourceGraphic" dx={greenOffset} dy="0" result="green" />
            <feOffset in="SourceGraphic" dx={blueOffset} dy="0" result="blue" />
            <feComponentTransfer in="red" result="redChannel">
              <feFuncR type="discrete" tableValues="1" />
              <feFuncG type="discrete" tableValues="0" />
              <feFuncB type="discrete" tableValues="0" />
            </feComponentTransfer>
            <feComponentTransfer in="green" result="greenChannel">
              <feFuncR type="discrete" tableValues="0" />
              <feFuncG type="discrete" tableValues="1" />
              <feFuncB type="discrete" tableValues="0" />
            </feComponentTransfer>
            <feComponentTransfer in="blue" result="blueChannel">
              <feFuncR type="discrete" tableValues="0" />
              <feFuncG type="discrete" tableValues="0" />
              <feFuncB type="discrete" tableValues="1" />
            </feComponentTransfer>
            <feBlend in="redChannel" in2="greenChannel" mode="screen" result="rg" />
            <feBlend in="rg" in2="blueChannel" mode="screen" />
          </filter>
        </defs>
      </svg>

      <div
        className="glass-backdrop"
        style={{
          filter: `url(#${filterId}) brightness(${brightness}%)`,
          borderRadius: `${borderRadius}px`
        }}
      />

      <div className="glass-content">{children}</div>
    </div>
  );
};

export default GlassSurface;
