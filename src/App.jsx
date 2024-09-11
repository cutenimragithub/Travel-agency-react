import Category from "./components/Category"
import Destination from "./components/Destination"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Logo from "./components/Logo"
import Booking from "./components/Booking"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <Category/>
   <Destination/>
   <Booking/>
   <Testimonial/>
   <Logo/>
   <Newsletter/>
   <Footer/>
  
    </>
  )
}

export default App
