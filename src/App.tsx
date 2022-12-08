

import { BrowserRouter,Routes, Route } from "react-router-dom";


import Navbar from "./components/NavbarCard/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
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
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  };

// export function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact>  <HomePage /></Route>
//           <Route path="/about"> <AboutPage />
//           </Route>
//           <Route path="/contact">
//             <ContactPage />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
//   };




export default App;
