
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero3DLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        () => {
          setShouldLoad(true);
        },
        { timeout: 1800 }
      );

      return () => {
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      setShouldLoad(true);
    }, 700);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return shouldLoad ? <Hero3D /> : null;
}