import Header from "./components/Header";
import Hero from "./components/Hero";
import ComoFunciona from "./components/ComoFunciona";
import Modulos from "./components/Modulos";
import Beneficios from "./components/Beneficios";
import Pricing from "./components/Pricing";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Modulos />
        <Beneficios />
        <Pricing />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
