import About from "./components/AboutUs/About"
import Footer from "./components/Footer/Footer"
import Started from "./components/GetStarted/Started"
import OurServices from "./components/OurServices/OurServices"
import Portfolio from "./components/Portfolio/Portfolio"
import Main from "./components/Start/Main/Main"
import Navbar from "./components/Start/Navbar/Navbar"
import Testimonial from "./components/Testimonial/Testimonial"


function App() {

  return (
    <>
      <Navbar />
      <Main />
      <About />
      <OurServices />
      <Portfolio />
      <Testimonial />
      <Started />
      <Footer />
    </>
  )
}

export default App
