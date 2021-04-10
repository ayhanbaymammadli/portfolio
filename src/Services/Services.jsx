import * as React from "react";
import "./Services.css";

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="title">
          <h1>My services</h1>
        </div>
        <div className="services-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur beatae exercitationem unde quas eaque possimus.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-cog"></i>
              <div className="text"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur beatae exercitationem unde quas eaque possimus.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-pencil-ruler"></i>
              <div className="text"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur beatae exercitationem unde quas eaque possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
