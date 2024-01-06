

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
   
      <Footer />

    </div>
  );
}

export default App;
