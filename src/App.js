import { useEffect, useState } from "react";
import "./App.css";
import Ai from "./components/Ai";
import BackToTop from "./components/BackToTop";
import Blockchain from "./components/Blockchain";
import Footer from "./components/Footer";
import Header from "./components/Header";
import More from "./components/More";
import Nav from "./components/Nav";
import Ready from "./components/Ready";
import Token from "./components/Token";
import Unique from "./components/Unique";
import What from "./components/What";
import Preloader from "./components/Preloader";
import bg from './assets/images/hero.webp'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader />
      </div>
    ) : (
    <div className="bg-[#040404] overflow-x-clip">
      <div className="lg:px-[30px] mx-auto ">
        <div className=" bg-[url(./assets/images/hero.webp)] xl:bg-full bg-cover bg-left md:bg-center bg-no-repeat flex flex-col  lg:h-[745px] ">
          <Nav />
          <Header />
        </div>
      </div>
      <Ai />
      <Unique/>
      <Blockchain />
      <More />
      <What />
      <Token />
      <Ready />
      <Footer />
      <BackToTop/>
      </div>
    )}
    </div>
  );
}

export default App;
