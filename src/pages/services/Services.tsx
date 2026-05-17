import ServicesDesktop from './ServicesDesktop';
import ServicesMobile from './ServicesMobile';

interface ServicesProps {
  isMobile: boolean;
}

export default function Services({ isMobile }: ServicesProps) {
  return isMobile ? <ServicesMobile /> : <ServicesDesktop />;
}
