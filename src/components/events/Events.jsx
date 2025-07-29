import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Events.css';
import eventData from './events.json';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const component = useRef(null);
  const carousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNav = (direction) => {
    const newSlide = direction === 'next'
      ? (currentSlide + 1) % eventData.length
      : (currentSlide - 1 + eventData.length) % eventData.length;
    setCurrentSlide(newSlide);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop: Original sticky horizontal scroll
        '(min-width: 768px)': function () {
          gsap.to(carousel.current, {
            x: () => -(carousel.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: component.current,
              pin: true,
              scrub: 1,
              end: () => `+=${carousel.current.scrollWidth - window.innerWidth}`,
              invalidateOnRefresh: true,
            },
          });
        },

        // Mobile: New card carousel
        '(max-width: 767px)': function () {
          const slideWidth = carousel.current.querySelector('.event-card').offsetWidth;
          gsap.to(carousel.current, {
            x: -currentSlide * slideWidth,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        },
      });
    }, component);
    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <main className="events-section" ref={component}>
      {/* Mobile-only header */}
      <div className="live-events-header-mobile">
        <h1 className="live-events-title-mobile">Live Events</h1>
        <p className="live-events-description-mobile">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>
      </div>

      <div className="mobile-carousel-container">
        <div className="event-carousel-wrapper">
          <div className="event-carousel" ref={carousel}>
            {/* Desktop-only full-screen panel */}
            <div className="live-events-panel-desktop">
              <h1 className="live-events-title-desktop">Live Events.</h1>
              <p className="live-events-description-desktop">Scroll to explore our exciting events.</p>
            </div>

            {/* Event cards for both mobile and desktop */}
            {eventData.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-card-image"><img src={event.imageUrl} alt={event.title} /></div>
                <div className="event-card-content">
                  <p className="live-events-title">{event.title}</p>
                  <p className="event-card-date">{event.date}</p>
                  <p className="live-events-description">{event.description}</p>
                </div>
                <div className="event-card-buttons">
                  <button className="details-button">Details</button>
                  {event.tags.map((tag, idx) => (
                    <button key={idx} className="tag-button">{tag}</button>
                  ))}
                </div>
              </div>
            ))}

            {/* Spacer for desktop only */}
            <div className="event-card-spacer"></div>
          </div>
        </div>

        {/* Mobile-only navigation */}
        <div className="carousel-nav-mobile">
          <button onClick={() => handleNav('prev')} className="nav-arrow prev-arrow">&#8249;</button>
          <button onClick={() => handleNav('next')} className="nav-arrow next-arrow">&#8250;</button>
        </div>
      </div>
    </main>
  );
};

export default Events;
