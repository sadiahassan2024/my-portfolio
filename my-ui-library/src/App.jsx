import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// ── Pages import (folders se) ──
import Home     from "./pages/Home";
import AboutMe  from "./pages/AboutMe";
import Services from "./pages/Services";
import MyWork   from "./pages/MyWork";
import Contact  from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mywork"   element={<MyWork />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;