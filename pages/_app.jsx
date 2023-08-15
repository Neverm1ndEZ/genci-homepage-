import '@/assets/base.css';
import '../components/Carousel/BannerCarousel/BannerCarousel.css';
import '../components/Carousel/EffectCarousel/EffectCarousel.css';
import { Layout } from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import Provider from './Provider';
import { TodoListProvider } from 'context/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <TodoListProvider>
      <Provider>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </Provider>
    </TodoListProvider>
  );
}
