import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/Features/Features";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
         <Feature />
        <Products />
       <Testimonial />
        <Contact /> 
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
