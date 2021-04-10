import * as React from "react";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Slider } from "./Swiper/Swiper";

export function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Slider />
    </div>
  );
}
