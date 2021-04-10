import * as React from "react";
import "./Home.css";

export function Home() {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-content">
          <div className="text-1">Hello my name is</div>
          <div className="text-2">Ayhan</div>
          <div className="text-3">
            And I am <span>Human</span>
          </div>
          <a href="#">About me</a>
        </div>
      </div>
    </section>
  );
}
