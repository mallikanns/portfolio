import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Qualification from './Components/Qualification';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    // <div className="bg-[#222326]">
    <div className="appbg"> 
      {/* <Header/> */}
      {/* <Banner/> */}
      <About/>
      <Navbar/>
      <Skills/>
      <Project/>
      <Qualification/>
      <Contact/>
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
