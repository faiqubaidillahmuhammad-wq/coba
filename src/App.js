import "./App.css";
import Styles from "./MainPage/Mainpage.css";
import Beranda from "./MainPage/Beranda";
import Second from "./MainPage/Second";
import Services from "./MainPage/Services";
import OurClient from "./MainPage/OurClient";
import OurPartner from "./MainPage/OurPartners";
// import News from "./MainPage/News";
import Footers from "./MainPage/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound";
import Third from "./MainPage/Third";
import Pendaftaran from "./Pages/Pendaftaran";
import Duplikat from "./Pages/Duplikat";
import Rekomendasi from "./Pages/Rekomendasi";
import Legalisir from "./Pages/Legalisir";
import Headers from "./MainPage/Headers";
import About from "./Pages/About";
import Gallery from "./Pages/Galerry";
import Sakinah from "./Pages/KeluargaSakinah";
function App() {
  function MainPage() {
    return (
      <div className="App">
        <Beranda />
        <br />
        <br />
        <br />
        <Second />
        <br />
        <br />
        <br />
        <Third />
        <br />
        <br />
        <br />
        <Services />
        <br />
        <br />
        <br />
        <OurClient />
        <br />
        <br />
        <br />
        <OurPartner />
        {/* <News /> */}
        <Footers />
      </div>
    );
  }

  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="pendaftaran" element={<Pendaftaran />}></Route>
        <Route path="Duplikat" element={<Duplikat />}></Route>
        <Route path="Rekomendasi" element={<Rekomendasi />}></Route>
        <Route path="Legalisir" element={<Legalisir />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Gallery" element={<Gallery />}></Route>
        <Route path="KeluargaSakinah" element={<Sakinah />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
