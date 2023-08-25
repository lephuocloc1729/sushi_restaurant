import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import PopularFood from "./sections/PopularFood";
import Trending from "./sections/Trending";
import Newsletter from "./sections/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./sections/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="min-h-screen bg-creamson max-w-6xl mx-auto">
      <Header />
      <Hero />
      <AboutUs />
      <PopularFood />
      <Trending />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
