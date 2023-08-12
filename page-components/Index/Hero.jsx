import { Wrapper } from '@/components/Layout';
import EffectCarousel from '@/components/Carousel/EffectCarousel/EffectCarousel';
import BannerCarousel from '@/components/Carousel/BannerCarousel/BannerCarousel';
import GreetingText from '@/components/Text/GreetingText';
const Hero = () => {
  return (
    <Wrapper>
      <GreetingText />
      <EffectCarousel />
      <BannerCarousel />
    </Wrapper>
  );
};

export default Hero;
