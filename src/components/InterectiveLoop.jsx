import { useRef, useEffect, useState } from 'react';


const InteractiveLoop = ({
  images = [],
  speed = 1,
  direction = 'left',
  interactive = true,
  gap = 40,
  imageWidth = 300,
  imageHeight = 200,
  className = ''
}) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isDraggingRef = useRef(false);
  const currentXRef = useRef(0);
  const velocityRef = useRef(0);
  const directionRef = useRef(direction);
  const positionRef = useRef(0);
  
  const [isReady, setIsReady] = useState(false);

  // Animation loop
  useEffect(() => {
    if (!wrapperRef.current || images.length === 0) return;

    const wrapper = wrapperRef.current;
    const itemWidth = imageWidth + gap;
    const singleSetWidth = itemWidth * images.length;

    setIsReady(true);

    const animate = () => {
      if (!isDraggingRef.current) {
        const moveAmount = directionRef.current === 'left' ? -speed : speed;
        positionRef.current += moveAmount;

        // Seamless wrapping
        if (positionRef.current <= -singleSetWidth) {
          positionRef.current = 0;
        } else if (positionRef.current >= 0) {
          positionRef.current = -singleSetWidth;
        }

        wrapper.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize position for left direction
    if (directionRef.current === 'left') {
      positionRef.current = 0;
    } else {
      positionRef.current = -singleSetWidth;
    }

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images, speed, imageWidth, gap]);

  // Handle pointer down
  const handlePointerDown = (e) => {
    if (!interactive) return;
    
    isDraggingRef.current = true;
    currentXRef.current = e.clientX;
    velocityRef.current = 0;
    
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  // Handle pointer move
  const handlePointerMove = (e) => {
    if (!interactive || !isDraggingRef.current || !wrapperRef.current) return;

    const deltaX = e.clientX - currentXRef.current;
    velocityRef.current = deltaX;
    
    positionRef.current += deltaX;
    
    const itemWidth = imageWidth + gap;
    const singleSetWidth = itemWidth * images.length;
    
    // Seamless wrapping during drag
    if (positionRef.current <= -singleSetWidth) {
      positionRef.current = 0;
    } else if (positionRef.current >= 0) {
      positionRef.current = -singleSetWidth;
    }
    
    wrapperRef.current.style.transform = `translateX(${positionRef.current}px)`;
    
    currentXRef.current = e.clientX;
  };

  // Handle pointer up
  const handlePointerUp = () => {
    if (!interactive || !isDraggingRef.current) return;
    
    isDraggingRef.current = false;
    
    // Determine direction based on velocity
    if (Math.abs(velocityRef.current) > 2) {
      directionRef.current = velocityRef.current > 0 ? 'right' : 'left';
    }
  };

  const cursorStyle = interactive ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'default';

  // Create duplicated images for seamless loop (2 sets is enough)
  const duplicatedImages = [...images, ...images];

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
      style={{ cursor: cursorStyle }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div 
        ref={wrapperRef}
        className="flex items-center"
        style={{ 
          display: 'flex',
          gap: `${gap}px`,
          willChange: 'transform'
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 select-none"
            style={{
              width: `${imageWidth}`,
              height: `${imageHeight}`
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
  );
};

// export default InteractiveLoop;


export default function InteractiveTicker() {
  const demoImages = [
    { src: '../../public/logo.jpg', alt: 'Abstract 1' },
    { src: '../../public/logo.jpg', alt: 'Abstract 2' },
    { src: '../../public/logo.jpg', alt: 'Abstract 3' },
    { src: '../../public/logo.jpg', alt: 'Abstract 4' },
    { src: '../../public/logo.jpg', alt: 'Abstract 5' },
    { src: '../../public/logo.jpg', alt: 'Abstract 6' }
  ];




  return (
    <div className="bg- border-y border-y-gray-200/50 py-8">
      <InteractiveLoop
        images={demoImages}
        speed={1.5}
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