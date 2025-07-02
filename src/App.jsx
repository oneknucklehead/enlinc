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
import Networking from "./pages/Networking/Networking";
import ScrollToTop from "./components/ScrollToTop";
import WebAndAppDev from "./pages/Products/WebAndAppDev";
import PrivPolicy from "./pages/PrivPolicy";
import FinancePolicy from "./pages/FinancePolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import DoorAccess from "./pages/Networking/DoorAccess";
import CloudGateways from "./pages/Networking/CloudGateways";
import Wifi from "./pages/Networking/Wifi";

function App() {
  return (
    <div className="font-gabarito-reg-400 overflow-hidden">
      <Navbar />
      <div className="">
        <ScrollToTop />
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
          <Route path="/our-services" element={<Products />} />
          <Route
            path="/our-services/business-phone-systems"
            element={<BusinessPhoneSystems />}
          />
          <Route
            path="/our-services/managed-it-services"
            element={<ManagedITServices />}
          />
          <Route
            path="/our-services/security-cameras"
            element={<SecurityCameras />}
          />
          <Route
            path="/our-services/internet-and-voice"
            element={<InternetAndVoice />}
          />
          <Route
            path="/our-services/printers-and-copiers"
            element={<PrintersAndCopiers />}
          />
          <Route
            path="/our-services/web-and-app-development"
            element={<WebAndAppDev />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/networking/wifi" element={<Wifi />} />
          <Route path="/networking/door-access" element={<DoorAccess />} />
          <Route
            path="/networking/cloud-gateways"
            element={<CloudGateways />}
          />
          <Route path="/privacy-policy" element={<PrivPolicy />} />
          <Route path="/finance-policy" element={<FinancePolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
