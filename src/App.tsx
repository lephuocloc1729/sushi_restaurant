import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import PopularFood from "./sections/PopularFood";
function App() {
  return (
    <main className="min-h-screen bg-creamson max-w-6xl mx-auto">
      <Header />
      <Hero />
      <AboutUs />
      <PopularFood />
    </main>
  );
}

export default App;
