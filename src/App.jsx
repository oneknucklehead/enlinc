import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import PhoneSystems from "./pages/PhoneSystems";
import PSSmallBusiness from "./pages/PSSmallBusiness";
import MediumBusiness from "./pages/MediumBusiness";
import Enterprise from "./pages/Enterprise";
import Office from "./pages/Office";
import Brands from "./pages/Brands";

function App() {
  return (
    <div className="font-gabarito-reg-400">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/phone-systems" element={<PhoneSystems />} />
          <Route
            path="/phone-systems/small-business"
            element={<PSSmallBusiness />}
          />
          <Route
            path="/phone-systems/medium-business"
            element={<MediumBusiness />}
          />
          <Route path="/phone-systems/enterprise" element={<Enterprise />} />
          <Route path="/phone-systems/office" element={<Office />} />
          <Route path="/phone-systems/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
