import Hero from './components/hero'
import Navbar from './components/navbar'
import CenterModeSlickCarousel from './components/slider';
import Midsec1 from './components/midsec-1';
import Midsec2 from './components/midsec-2';
import Footer1 from './components/footer-1';
import Footer2 from './components/footer-2';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CenterModeSlickCarousel/>
      <Midsec1/>
      <Midsec2/>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default App
