import useIsMobile from "../hook/useIsMobile";
import DesktopPage from "./Desktop";
import MobilePage from "./MobileHome";

const HomePage = () => {
  const isMobile = useIsMobile();
  if (isMobile === null) return null; 
  return isMobile ? <MobilePage /> : <DesktopPage />;
};

export default HomePage;
