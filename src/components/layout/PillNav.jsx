import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

const isExternalLink = (href = '') =>
  href.startsWith('http://') ||
  href.startsWith('https://') ||
  href.startsWith('//') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:') ||
  href.startsWith('#');

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  logoFallback = 'BG',
  items = [],
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onItemClick,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logoNode = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoNode) {
        gsap.fromTo(
          logoNode,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease }
        );
      }

      if (navItems) {
        gsap.fromTo(
          navItems,
          { width: 0, overflow: 'hidden' },
          { width: 'auto', duration: 0.5, ease }
        );
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.25,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.25,
      ease,
      overwrite: 'auto',
    });
  };

  const animateMenu = open => {
    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (open) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (open) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          },
        });
      }
    }
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    animateMenu(nextState);
    if (nextState) {
      onMobileMenuClick?.();
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    animateMenu(false);
  };

  const resolveHref = item => {
    if (!item) return '#';
    if (item.href) return item.href;
    if (item.type === 'route') return item.target || '/';
    if (item.type === 'scroll' && item.target) return `#${item.target}`;
    return item.target || '#';
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
  };

  const renderLogo = () => {
    const logoContent = logo ? (
      <img src={logo} alt={logoAlt} ref={logoImgRef} />
    ) : (
      <span className="pill-logo-fallback">{logoFallback}</span>
    );

    const first = items?.[0];
    const href = resolveHref(first);
    const isRouter = href && !isExternalLink(href);

    const commonProps = {
      className: 'pill-logo',
      onMouseEnter: handleLogoEnter,
      role: 'menuitem',
      ref: el => {
        logoRef.current = el;
      },
    };

    if (isRouter) {
      return (
        <Link {...commonProps} to={href} aria-label="Home">
          {logoContent}
        </Link>
      );
    }

    return (
      <a {...commonProps} href={href || '#'} aria-label="Home">
        {logoContent}
      </a>
    );
  };

  return (
    <div className="pill-nav-container" style={cssVars}>
      <nav className={`pill-nav ${className}`} aria-label="Primary">
        {renderLogo()}

        <div className="pill-nav-items" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => {
              const href = resolveHref(item);
              const routerLink = href && !isExternalLink(href);
              const isActive = activeHref ? activeHref === href : false;

              const content = (
                <>
                  <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[index] = el;
                    }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">
                      <span>{item.label}</span>
                    </span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </>
              );

              const handleClick = event => {
                if (onItemClick) {
                  const result = onItemClick(item, event);
                  if (result === false) {
                    event.preventDefault();
                  }
                }
              };

              if (!href || item.type === 'action') {
                return (
                  <li key={item.key || `item-${index}`} role="none">
                    <button
                      type="button"
                      className={`pill${isActive ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(index)}
                      onMouseLeave={() => handleLeave(index)}
                      onClick={event => {
                        event.preventDefault();
                        onItemClick?.(item, event);
                      }}
                    >
                      {content}
                    </button>
                  </li>
                );
              }

              return (
                <li key={href || `item-${index}`} role="none">
                  {routerLink ? (
                    <Link
                      role="menuitem"
                      to={href}
                      className={`pill${isActive ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(index)}
                      onMouseLeave={() => handleLeave(index)}
                      onClick={handleClick}
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={href}
                      className={`pill${isActive ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(index)}
                      onMouseLeave={() => handleLeave(index)}
                      onClick={handleClick}
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className="mobile-menu-popover" ref={mobileMenuRef}>
        <ul className="mobile-menu-list">
          {items.map((item, index) => {
            const href = resolveHref(item);
            const routerLink = href && !isExternalLink(href);
            const isActive = activeHref ? activeHref === href : false;

            if (!href || item.type === 'action') {
              return (
                <li key={item.key || `mobile-item-${index}`}>
                  <button
                    type="button"
                    className={`mobile-menu-link${isActive ? ' is-active' : ''}`}
                    onClick={event => {
                      onItemClick?.(item, event);
                      closeMobileMenu();
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            }

            return (
              <li key={href || `mobile-item-${index}`}>
                {routerLink ? (
                  <Link
                    to={href}
                    className={`mobile-menu-link${isActive ? ' is-active' : ''}`}
                    onClick={event => {
                      onItemClick?.(item, event);
                      closeMobileMenu();
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={`mobile-menu-link${isActive ? ' is-active' : ''}`}
                    onClick={event => {
                      onItemClick?.(item, event);
                      closeMobileMenu();
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
