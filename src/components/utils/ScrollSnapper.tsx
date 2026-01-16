"use client";

import { useEffect } from "react";

export function ScrollSnapper() {
  useEffect(() => {
    // Add snap classes to html element
    document.documentElement.classList.add("snap-y", "snap-mandatory");

    // Remove snap classes when component unmounts
    return () => {
      document.documentElement.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

  return null;
}
