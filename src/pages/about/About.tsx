import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';

interface AboutProps {
  isMobile: boolean;
}

export default function About({ isMobile }: AboutProps) {
  return isMobile ? <AboutMobile /> : <AboutDesktop />;
}
