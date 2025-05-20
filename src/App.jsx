import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import PhoneSystems from "./pages/PhoneSystems/PhoneSystems";
import SmallBusiness from "./pages/PhoneSystems/SmallBusiness";
import { SmallBusiness as IndSmallBusiness } from "./pages/Industries/SmallBusiness";
import MediumBusiness from "./pages/PhoneSystems/MediumBusiness";
import Enterprise from "./pages/PhoneSystems/Enterprise";
import Office from "./pages/PhoneSystems/Office";
import Brands from "./pages/PhoneSystems/Brands";
import Automotive from "./pages/Industries/Automotive";
import Accountants from "./pages/Industries/Accountants";
import Construction from "./pages/Industries/Construction";
import Education from "./pages/Industries/Education";
import Healthcare from "./pages/Industries/Healthcare";
import Legal from "./pages/Industries/Legal";
import RealEstate from "./pages/Industries/RealEstate";
import Vet from "./pages/Industries/Vet";
import Wellness from "./pages/Industries/Wellness";
import BusinessPhoneSystems from "./pages/Products/BusinessPhoneSystems";
import ManagedITServices from "./pages/Products/ManagedITServices";
import SecurityCameras from "./pages/Products/SecurityCameras";
import InternetAndVoice from "./pages/Products/InternetAndVoice";
import PrintersAndCopiers from "./pages/Products/PrintersAndCopiers";
import Industries from "./pages/Industries/Industries";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="font-gabarito-reg-400">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* PHONE SYSTEMS */}
          <Route path="/phone-systems" element={<PhoneSystems />} />
          <Route
            path="/phone-systems/small-business"
            element={<SmallBusiness />}
          />
          <Route
            path="/phone-systems/medium-business"
            element={<MediumBusiness />}
          />
          <Route path="/phone-systems/enterprise" element={<Enterprise />} />
          <Route path="/phone-systems/office" element={<Office />} />
          <Route path="/phone-systems/brands" element={<Brands />} />
          {/* INDUSTRY */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/accountants" element={<Accountants />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/health-care" element={<Healthcare />} />
          <Route path="/industries/legal" element={<Legal />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route
            path="/industries/small-business"
            element={<IndSmallBusiness />}
          />
          <Route path="/industries/vet" element={<Vet />} />
          <Route path="/industries/wellness" element={<Wellness />} />
          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/business-phone-systems"
            element={<BusinessPhoneSystems />}
          />
          <Route
            path="/products/managed-it-services"
            element={<ManagedITServices />}
          />
          <Route
            path="/products/security-cameras"
            element={<SecurityCameras />}
          />
          <Route
            path="/products/internet-and-voice"
            element={<InternetAndVoice />}
          />
          <Route
            path="/products/printers-and-copiers"
            element={<PrintersAndCopiers />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
