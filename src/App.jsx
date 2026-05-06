import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './page/About'
import Contact from './page/Contact'
import Home from './page/Home'
import Product from './page/Product'
import Navbar from './component/Navbar'
import { useEffect } from "react";
import axios from "axios";


function App() {
  const getLocation = async () => {

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by this browser.");
      return;
    }


    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords
      console.log(latitude, longitude)

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&email=your@email.com`;


      try {
        const locationReq = await axios.get(url);
        console.log(locationReq);
      } catch (error) {
        console.log(error);
      }
    });
  };



  useEffect(() => {
    getLocation()
  }, [])


  return (<>

    <BrowserRouter>
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-gray-100 to-yellow-200  flex flex-col">

        <Navbar />

        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<div className="h-[60vh] flex items-center justify-center">
            <h1 className="text-3xl font-bold text-red-400"> 404 - Error </h1></div>} />
        </Routes>
      </div>



      {/* <footer className="h-12 flex items-center justify-center text-sm bg-black/40">
        © 2026 Ecommerce App Using Context API
      </footer> */}

    </BrowserRouter >
  </>);
}


export default App;
