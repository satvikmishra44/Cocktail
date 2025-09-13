import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <div className='h-dvh'></div>
    </main>
  );
}

export default App;