import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scroll from './components/Scroll';
import Qna from './components/Qna';
import Traditional from './components/Traditional';
import Traditional2 from './components/Traditional2';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Answers from './components/Answers';
import Footer from './components/Footer';

function App() {

  return (
    <div className='w-[100vw] h-full bg-white'>
      <Navbar />
      <Hero />
      <Scroll />
      <Qna />
      <Traditional />
      <Traditional2 />
      <Solution />
      <Pricing />
      <Answers />
      <Footer />
    </div>
  )
}

export default App
