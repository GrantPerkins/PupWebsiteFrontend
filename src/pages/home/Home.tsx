import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

interface HomeProps {
  isMobile: boolean;
}

export default function Home({ isMobile }: HomeProps) {
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
