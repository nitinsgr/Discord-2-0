import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Getting_started from './Components/Get_Started/Getting_started';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Onboarding_group from './Components/Onboarding/onboarding_group';
import Onboarding_moderation from './Components/Onboarding/onboarding_moderation';
import Onboarding_voice from './Components/Onboarding/onboarding_voice';

function App() {
  return (
    <div>
     <Routes>
     <Route path="/" element={<Header/>}/>
    
   </Routes>
   <Routes>
     <Route path="/" element={<Hero/>}/>
  
   </Routes>
   <Routes>
   <Route path="/" element={<Onboarding_group/>}/>
   </Routes>

   <Routes>
   <Route path="/" element={<Onboarding_voice/>}/>
   </Routes>

   <Routes>
   <Route path="/" element={<Onboarding_moderation/>}/>
   </Routes>

   <Routes>
   <Route path="/" element={<Getting_started/>}/>
   </Routes>
   <Routes>
   <Route path="/" element={<Footer/>}/>
   </Routes>
      </div>
  
  );
}

export default App;
