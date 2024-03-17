import { useState } from 'react';
import Header from './component/Header';
import "./App.css";
import Banner from './component/Banner';
import AboutMe from './component/AboutMe';
import Services from './component/Services';
import Skill from './component/Skill';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Header/>
     <Banner/>
     <AboutMe/>
     <Services/>
  
     <Skill/>
    </>
  )
}

export default App
