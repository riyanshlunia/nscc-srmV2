import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: 'https://placehold.co/600x800/1c2a4a/ffffff?text=Image+1', w: 600, h: 800, y: '5%' },
  { id: 2, src: 'https://placehold.co/800x600/3a506b/ffffff?text=Image+2', w: 800, h: 600, y: '-10%' },
  { id: 3, src: 'https://placehold.co/600x600/5c9ead/ffffff?text=Image+3', w: 600, h: 600, y: '15%' },
  { id: 4, src: 'https://placehold.co/800x1000/82c0cc/ffffff?text=Image+4', w: 800, h: 1000, y: '-5%' },
  { id: 5, src: 'https://placehold.co/1200x800/a8d5e2/000000?text=Image+5', w: 1200, h: 800, y: '10%' },
  { id: 6, src: 'https://placehold.co/700x900/d4eaf7/000000?text=Image+6', w: 700, h: 900, y: '-15%' },
  { id: 7, src: 'https://placehold.co/900x900/f7f7f7/000000?text=Image+7', w: 900, h: 900, y: '0%' },
  { id: 8, src: 'https://placehold.co/1000x800/1c2a4a/ffffff?text=Image+8', w: 1000, h: 800, y: '5%' },
];

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileGallery /> : <DesktopGallery />;
}

const DesktopGallery = () => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: galleryRef });

  // This will map the scroll progress (0 to 1) to a horizontal translation.
  // You might need to adjust the output range [-200%, 0%] based on the total width of your gallery content.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={galleryRef} className="gallery-container">
      <div className="sticky-gallery-container">
        <div className="gallery-background">
          <h1 className="gallery-title">Gallery.</h1>
        </div>
        <motion.div className="gallery-carousel" style={{ x }}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-image-wrapper"
              style={{
                '--w': `${image.w}px`,
                '--h': `${image.h}px`,
                transform: `translateY(${image.y})`,
              }}
            >
              <img src={image.src} alt={`Gallery image ${image.id}`} className="gallery-image" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MobileGallery = () => (
  <div className="gallery-container mobile">
    <div className="gallery-mobile-content">
      <h1 className="gallery-title mobile">Gallery</h1>
      <div className="gallery-mobile-grid">
        {galleryImages.slice(0, 4).map((image) => (
          <div key={image.id} className="gallery-mobile-image-wrapper">
            <img src={image.src} alt={`Gallery image ${image.id}`} className="gallery-mobile-image" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
