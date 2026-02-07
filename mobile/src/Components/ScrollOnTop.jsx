import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar jab 'pathname' (URL) badlega, page top par chala jayega
    window.scrollTo({
      top: 0,
      behavior: "instant", // "smooth" ki jagah "instant" better hai page change par
    });
  }, [pathname]);

  return null; // Yeh component kuch dikhayega nahi, sirf logic chalayega
};

export default ScrollToTop;
