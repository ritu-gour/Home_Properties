
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
// import Portfolio from "./components/Portfolio/Portfolio";
import Courses from "./components/Courses/Courses";
import Checkout from "./components/Courses/Checkout";
import Courses1 from "./components/Courses/Courses1";
import Courses2 from "./components/Courses/Courses2";
import Courses3 from "./components/Courses/Courses3";
import Registration from "./components/Form/Registration";
import Login from "./components/Form/Login";
import Faq from "./components/Faq/Faq";
import Account from "./components/Form/Account";
import './App.css'
import Termsofuse from "./components/Legal/Termsofuse";
import Privacypolicy from "./components/Legal/Privacypolicy";
import Refundpolicy from "./components/Legal/Refundpolicy";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

      <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/portfolio' element={<Portfolio />} />  */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses1' element={<Courses1/>} />
        <Route path='/courses2' element={<Courses2/>} />
        <Route path='/courses3' element={<Courses3/>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/termsofuse' element={<Termsofuse/>} />
        <Route path='/privacypolicy' element={<Privacypolicy/>} />
        <Route path='/Refundpolicy' element={<Refundpolicy/>} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
