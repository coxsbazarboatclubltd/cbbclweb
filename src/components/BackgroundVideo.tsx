import React, { useEffect, useRef, useState } from "react";
import { MASTER_HERO_POSTER } from "../data";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /**
   * Play the looping video. Off by default: pages show the still poster frame instead,
   * which looks the same under their navy overlays but costs ~160 KB rather than the
   * full video (bandwidth is billed per byte on Vercel). Only the homepage animates.
   */
  animated?: boolean;
}

export default function BackgroundVideo({
  src,
  poster = MASTER_HERO_POSTER,
  className = "absolute inset-0 w-full h-full object-cover transition-all duration-500",
  animated = false,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // The video file is only requested once the element is near the viewport.
  const [shouldLoad, setShouldLoad] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!animated || !video) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    const video = videoRef.current;
    if (!animated || !video || !shouldLoad) return;

    if (!inView) {
      video.pause();
      return;
    }

    // Direct DOM manipulation ensures these attributes are fully enforced
    // which bypasses strict iOS/Chrome WebKit autoplay constraints.
    video.muted = true;
    video.defaultMuted = true;

    video.play().catch((err) => {
      console.warn("Browser autoplay blocked of background video, preparing user interaction triggers:", err);
    });

    // Responsive interaction trigger as a safe fallback for aggressive autoplay restrictions:
    // Some mobile browsers block initial autoplay if the device is in low-power mode,
    // but we can wake it up silently upon any scroll, touch, or click.
    const wakeUpVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
      // Cleanup once playback has successfully initiated or tried
      removeWakeUpListeners();
    };

    const removeWakeUpListeners = () => {
      document.removeEventListener("touchstart", wakeUpVideo);
      document.removeEventListener("click", wakeUpVideo);
      document.removeEventListener("scroll", wakeUpVideo);
    };

    document.addEventListener("touchstart", wakeUpVideo, { passive: true });
    document.addEventListener("click", wakeUpVideo, { passive: true });
    // Scroll event can trigger autoplay once viewport changes
    document.addEventListener("scroll", wakeUpVideo, { passive: true });

    return () => {
      removeWakeUpListeners();
    };
  }, [animated, shouldLoad, inView, src]);

  if (!animated) {
    return <img src={poster} alt="" aria-hidden="true" decoding="async" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
