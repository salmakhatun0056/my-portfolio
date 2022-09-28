import { useEffect } from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/shared/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import ProjectDetail from "./components/pages/ProjectDetail";
import Footer from "./components/shared/Footer";
import AllProject from "./components/pages/AllProject";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/details/:id" element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path="/allproject" element={<AllProject></AllProject>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
