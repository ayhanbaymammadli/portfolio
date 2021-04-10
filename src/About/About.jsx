import * as React from "react";
import "./About.css";
import catimg from "../image/cat.jpg";

export function About() {
  return (
    <section className="about ubuntu" id="about">
      <div className="container">
        <div className="title">
          <h1>About me</h1>
        </div>
        <div className="about-content">
          <div className="column left">
            <img src={catimg} alt="" />
          </div>
          <div className="column right">
            <div className="text">I am from Azerbijan</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              soluta dolorum. Vero, voluptatibus maxime asperiores accusantium
              soluta beatae id dolorum fugiat, pariatur minima ipsum nostrum
              tenetur ut eum reiciendis quam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste, rem, asperiores praesentium
              eligendi repudiandae nam cumque expedita perspiciatis, voluptatum
              similique officiis ratione animi sint ipsam dolore eum ducimus
              rerum nihil!
            </p>
            <a href="#">Download Cv</a>
          </div>
        </div>
      </div>
    </section>
  );
}
