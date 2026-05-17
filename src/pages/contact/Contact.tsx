import ContactDesktop from './ContactDesktop';
import ContactMobile from './ContactMobile';

interface ContactProps {
  isMobile: boolean;
}

export default function Contact({ isMobile }: ContactProps) {
  return isMobile ? <ContactMobile /> : <ContactDesktop />;
}
