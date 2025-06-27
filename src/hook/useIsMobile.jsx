// useIsMobile.js
import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 1120) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < breakpoint);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;