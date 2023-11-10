import { lazy, Suspense} from 'react';
import GridLoader from 'react-spinners/GridLoader';
// import Navbar from './components/navbar';
// import Hero from './components/hero';

// Use React.lazy for dynamic imports
const CenterModeSlickCarousel = lazy(() => import('./components/slider'));
const Midsec1 = lazy(() => import('./components/midsec-1'));
const Hero = lazy(() => import('./components/hero'));
const Navbar = lazy(() => import('./components/navbar'));
const Midsec2 = lazy(() => import('./components/midsec-2'));
const Footer1 = lazy(() => import('./components/footer-1'));
const Footer2 = lazy(() => import('./components/footer-2'));


function App() {
  return (
    <div>
      <Suspense fallback={<div className='absolute top-[25%] left-[40%] loader '><GridLoader
          size={100}  
          color='#00CC99'
      /></div>}>
      <Navbar />
      <Hero />
      {/* Wrap lazy-loaded components with Suspense */}
        <CenterModeSlickCarousel />
        <Midsec1 />
        <Midsec2 />
        <Footer1 />
        <Footer2 />
      </Suspense>
    </div>
  );
}

export default App;
