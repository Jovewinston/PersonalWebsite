import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToElement = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Delay scrolling until after page is rendered
    setTimeout(scrollToElement, 0);
  }, [hash]);

  return null;
}
