import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Download_Page from './Components/Download/Download_Page';
import Footer from './Components/Footer/Footer';
import Getting_started from './Components/Get_Started/Getting_started';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Nitro_Page from './Components/Nitro/Nitro_Page';
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

   <Routes>
   <Route path="Download" element={<Download_Page/>}/>
   </Routes>
   
   <Routes>
   <Route path="Nitro" element={<Nitro_Page/>}/>
   </Routes>

      </div>
  
  );
}

export default App;
