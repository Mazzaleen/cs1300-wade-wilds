

import { BrowserRouter,Routes, Route } from "react-router-dom";


import Navbar from "./components/NavbarCard/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfoilo from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Portfoilo />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

{/* <>
<nav />
</> */}


    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Portfoilo />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>

  );
  };






export default App;
