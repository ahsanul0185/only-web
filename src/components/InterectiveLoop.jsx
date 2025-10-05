import { useRef, useEffect, useState } from 'react';


const InteractiveLoop = ({
  images = [],
  speed = 6,
  direction = 'left',
  interactive = true,
  gap = 40,
  imageWidth = '100px',
  imageHeight = 'auto',
  autoFill = true,
  className = ''
}) => {
  const containerRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const animationRef = useRef(null);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const directionRef = useRef(direction);
  const xRef = useRef(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    if (!track1Ref.current || !containerRef.current || images.length === 0) return;

    const track1 = track1Ref.current;
    const container = containerRef.current;
    
    // Wait for images to load
    const loadImages = async () => {
      const imageElements = track1.querySelectorAll('img');
      await Promise.all(
        Array.from(imageElements).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      const trackWidth = track1.scrollWidth;
      const trackHeight = track1.offsetHeight;
      const containerWidth = container.offsetWidth;
      
      setContainerHeight(trackHeight);

      // Calculate how many times we need to repeat to fill the viewport
      if (autoFill && trackWidth < containerWidth) {
        const needed = Math.ceil(containerWidth / trackWidth) + 2;
        setMultiplier(needed);
      } else {
        setMultiplier(1);
      }
    };

    loadImages();
  }, [images, autoFill]);

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current || images.length === 0 || multiplier === 0) return;

    const track1 = track1Ref.current;
    const track2 = track2Ref.current;
    
    setTimeout(() => {
      const trackWidth = track1.scrollWidth;
      
      // Position second track right after first (including the gap)
      track2.style.left = `${trackWidth + gap}px`;

      const animate = () => {
        if (!isDraggingRef.current) {
          const moveAmount = directionRef.current === 'left' ? -speed : speed;
          xRef.current += moveAmount;

          // Seamless loop logic
          const loopWidth = trackWidth + gap;
          
          if (directionRef.current === 'left') {
            if (xRef.current <= -loopWidth) {
              xRef.current = 0;
            }
          } else {
            if (xRef.current >= 0) {
              xRef.current = -loopWidth;
            }
          }

          track1.style.transform = `translateX(${xRef.current}px)`;
          track2.style.transform = `translateX(${xRef.current}px)`;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      // Initialize
      xRef.current = directionRef.current === 'left' ? 0 : -(trackWidth + gap);
      animate();
    }, 50);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images, speed, multiplier]);

  const handlePointerDown = (e) => {
    if (!interactive) return;
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!interactive || !isDraggingRef.current || !track1Ref.current) return;

    const deltaX = e.clientX - lastXRef.current;
    velocityRef.current = deltaX;
    xRef.current += deltaX;

    const trackWidth = track1Ref.current.scrollWidth;
    const loopWidth = trackWidth + gap;

    // Wrap seamlessly during drag
    if (xRef.current <= -loopWidth) {
      xRef.current = 0;
    } else if (xRef.current >= 0) {
      xRef.current = -loopWidth;
    }

    track1Ref.current.style.transform = `translateX(${xRef.current}px)`;
    track2Ref.current.style.transform = `translateX(${xRef.current}px)`;

    lastXRef.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (!interactive || !isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    if (Math.abs(velocityRef.current) > 2) {
      directionRef.current = velocityRef.current > 0 ? 'right' : 'left';
    }
  };

  const cursorStyle = interactive ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'default';

  // Repeat images based on multiplier for autoFill
  const repeatedImages = autoFill && multiplier > 1 
    ? Array(multiplier).fill(images).flat() 
    : images;

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden w-full relative ${className}`}
      style={{ 
        cursor: cursorStyle,
        height: containerHeight || 'auto',
        minHeight: '50px'
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="relative w-full h-full">
        {/* Track 1 */}
        <div 
          ref={track1Ref}
          className="flex items-center absolute top-0 left-0 whitespace-nowrap"
          style={{ 
            gap: `${gap}px`,
            willChange: 'transform'
          }}
        >
          {repeatedImages.map((image, index) => (
            <div
              key={`t1-${index}`}
              className="flex-shrink-0 select-none inline-block"
              style={{
                width: imageWidth,
                height: imageHeight
              }}
            >
              <img
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
        
        {/* Track 2 - Duplicate */}
        <div 
          ref={track2Ref}
          className="flex items-center absolute top-0 whitespace-nowrap"
          style={{ 
            gap: `${gap}px`,
            willChange: 'transform'
          }}
        >
          {repeatedImages.map((image, index) => (
            <div
              key={`t2-${index}`}
              className="flex-shrink-0 select-none inline-block"
              style={{
                width: imageWidth,
                height: imageHeight
              }}
            >
              <img
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default InteractiveLoop;


export default function InteractiveTicker() {
  const demoImages = [
    { src: '/logo.jpg', alt: 'Abstract 1' },
    { src: '/logo.jpg', alt: 'Abstract 2' },
    { src: '/logo.jpg', alt: 'Abstract 3' },
    { src: '/logo.jpg', alt: 'Abstract 4' },
    { src: '/logo.jpg', alt: 'Abstract 5' },
    { src: '/logo.jpg', alt: 'Abstract 6' }
  ];




  return (
    <div className="bg- border-y border-y-gray-200/50 py-8">
      <InteractiveLoop
        images={demoImages}
        speed={0.5}
        direction="left"
        interactive={true}
        gap={100}
        imageWidth="100px"
        imageHeight={"fit"}
        className=""
      />
    </div>
  );
}