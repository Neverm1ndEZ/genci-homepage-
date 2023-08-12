import '@/assets/base.css';
import '../components/Carousel/BannerCarousel/BannerCarousel.css';
import '../components/Carousel/EffectCarousel/EffectCarousel.css';
import { Layout } from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import Provider from './Provider';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </Provider>
  );
}
