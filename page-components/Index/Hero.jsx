import { Wrapper } from '@/components/Layout';
import EffectCarousel from '@/components/Carousel/EffectCarousel/EffectCarousel';
import BannerCarousel from '@/components/Carousel/BannerCarousel/BannerCarousel';
const Hero = () => {
  return (
    <Wrapper>
      <EffectCarousel />
      <BannerCarousel />
    </Wrapper>
  );
};

export default Hero;
