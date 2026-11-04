"use client";

import { useState } from "react";

/**
 * Optional demonstration video. NOT part of the approved layout — it is rendered only
 * when SHOW_DEMO_VIDEO=true. Click-to-load so no video bytes are fetched until requested.
 * Supply the file at /public/video/h006-demo.mp4 and a poster at /public/images/h006-demo-poster.jpg.
 */
export function VideoPlayer({
  src = "/video/h006-demo.mp4",
  poster = "/images/h006-demo-poster.jpg",
  title = "H006 demonstration video",
}: {
  src?: string;
  poster?: string;
  title?: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="mx-auto mt-14 max-w-[960px] overflow-hidden rounded-[28px] bg-secondary lg:mt-24">
      {active ? (
        <video className="block aspect-video w-full" controls autoPlay preload="none" poster={poster} aria-label={title}>
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          className="relative block aspect-video w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        >
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-on-primary">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
