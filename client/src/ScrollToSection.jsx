import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // This will execute when the route changes
    const hash = location.hash;

    if (hash) {
      // Find the element by the ID in the hash
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
