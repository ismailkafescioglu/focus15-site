"use client";

import { useEffect } from "react";

// The hero's "jump to section" links (#stratups, #4w1n, #growth-match) leave
// that hash sitting in the address bar once clicked. Left alone it stays
// there indefinitely, so a visitor hitting refresh later lands back on that
// section instead of the hero — reads as "refresh is broken" rather than
// the ordinary browser behavior it actually is (the browser is correctly
// honoring the hash still in the URL). Strips the hash from the address bar
// shortly after it appears — both on initial load (a link shared/bookmarked
// with a hash already in it) and after a same-page click, which changes the
// hash without a full reload and so needs its own listener, not just an
// on-mount check — so a later refresh starts at the top like every other
// page, while the section still gets jumped to as normal in the meantime.
export default function CleanHashOnLoad() {
  useEffect(() => {
    let timer: number | undefined;

    function scheduleClean() {
      if (!window.location.hash) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }, 400);
    }

    scheduleClean();
    window.addEventListener("hashchange", scheduleClean);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scheduleClean);
    };
  }, []);

  return null;
}
