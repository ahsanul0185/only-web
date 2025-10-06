import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SplitText2 = ({
  text,
  className = '',
  delay = 100,
  animationDelay = 0,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  onClick
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [splitContent, setSplitContent] = useState([]);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: rootMargin
  });

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!text || !fontsLoaded) return;

    const splitTextContent = () => {
      if (splitType.includes('chars')) {
        // Split by characters, preserving spaces
        return text.split('').map((char, i) => ({
          type: 'char',
          content: char,
          key: `char-${i}`
        }));
      } else if (splitType.includes('words')) {
        // Split by words
        return text.split(' ').map((word, i) => ({
          type: 'word',
          content: word,
          key: `word-${i}`
        }));
      } else if (splitType.includes('lines')) {
        // For lines, we'll treat the whole text as one line for simplicity
        // In a real scenario, you'd need to measure and break at actual line breaks
        return [{
          type: 'line',
          content: text,
          key: 'line-0'
        }];
      }
      return [];
    };

    setSplitContent(splitTextContent());
  }, [text, splitType, fontsLoaded]);

  // Convert GSAP ease to Framer Motion ease
  const getFramerEase = () => {
    if (ease.includes('power3')) return [0.76, 0, 0.24, 1];
    if (ease.includes('power2')) return [0.65, 0, 0.35, 1];
    if (ease.includes('power4')) return [0.83, 0, 0.17, 1];
    return ease;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: animationDelay
      }
    }
  };

  const itemVariants = {
    hidden: {
      ...from
    },
    visible: {
      ...to,
      transition: {
        duration,
        ease: getFramerEase()
      }
    }
  };

  useEffect(() => {
    if (isInView && splitContent.length > 0) {
      const timer = setTimeout(() => {
        onLetterAnimationComplete?.();
      }, (animationDelay + (splitContent.length * delay / 1000) + duration) * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, splitContent.length, animationDelay, delay, duration, onLetterAnimationComplete]);

  const style = {
    textAlign,
    wordWrap: 'break-word',
    willChange: 'transform, opacity'
  };

  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;

  const renderContent = () => {
    if (!fontsLoaded || splitContent.length === 0) {
      return <span style={{ opacity: 0 }}>{text}</span>;
    }

    return (
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ display: 'inline-block' }}
      >
        {splitContent.map((item, index) => (
          <motion.span
            key={item.key}
            variants={itemVariants}
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity'
            }}
          >
            {item.content === ' ' ? '\u00A0' : item.content}
            {item.type === 'word' && index < splitContent.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  const MotionTag = motion[tag] || motion.p;

  return (
    <MotionTag 
      ref={ref} 
      style={style} 
      className={classes} 
      onClick={onClick}
    >
      {renderContent()}
    </MotionTag>
  );
};


export default SplitText2