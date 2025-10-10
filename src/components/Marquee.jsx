// InteractiveMarquee.jsx
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

/*
Props:
  items: array of strings or React nodes to show in the marquee
  speed: number (auto-scroll speed; tweak)
*/
export default function Marquee({ items = [], speed = 1 }) {
  // viewportRef: attach to the embla viewport element
  // emblaApi: carousel api (null until ready)
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    []
  );

  const autoScrollRef = useRef(null);          // holds plugin instance
  const pointerStartX = useRef(null);          // track pointer start to detect drag direction
  const [direction, setDirection] = useState("forward");

  // (re)initialize autoscroll plugin whenever emblaApi is ready or direction changes
  useEffect(() => {
    if (!emblaApi) return;

    // create plugin instance with selected direction
    autoScrollRef.current = AutoScroll({
      speed,                 // pixels per frame-ish (tweak)
      direction,             // 'forward' or 'backward'
      playOnInit: true,
      startDelay: 600,
      stopOnInteraction: false, // will continue after interactions (you can change)
    });

    // replace plugins (reInit replaces plugins)
    emblaApi.reInit({ loop: true, dragFree: true, align: "start" }, [
      autoScrollRef.current,
    ]);

    return () => {
      // cleanup plugin
      try {
        autoScrollRef.current?.stop?.();
      } catch (e) {}
    };
  }, [emblaApi, direction, speed]);

  // pointer handlers to detect horizontal drag direction
  const onPointerDown = (e) => {
    // unified pointer event (works for mouse & touch)
    pointerStartX.current = e.clientX ?? (e.touches && e.touches[0]?.clientX);
  };

  const onPointerUp = (e) => {
    const endX = e.clientX ?? (e.changedTouches && e.changedTouches[0]?.clientX);
    if (pointerStartX.current == null || endX == null) return;
    const dx = endX - pointerStartX.current;
    const THRESHOLD = 8; // small threshold to ignore taps

    if (Math.abs(dx) > THRESHOLD) {
      // user moved right -> set backward (content should move right)
      // user moved left  -> set forward (content moves left)
      setDirection(dx > 0 ? "backward" : "forward");
    }
    pointerStartX.current = null;
  };

  // duplicate items to make the line feel continuous (optional)
  const displayItems = [...items, ...items];

  return (
    <div
      // attach embla viewport ref here:
      ref={viewportRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchEnd={onPointerUp}
      style={{
        overflow: "hidden",
        width: "100%",
        cursor: "grab",
        userSelect: "none",
      }}
      aria-label="interactive marquee"
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
          // keep items in a single row
          whiteSpace: "nowrap",
        }}
      >
        {displayItems.map((it, i) => (
          <div
            key={i}
            style={{ flex: "0 0 auto", padding: "0 12px", fontSize: 18 }}
          >
            {typeof it === "string" ? <span>{it}</span> : it}
          </div>
        ))}
      </div>
    </div>
  );
}
