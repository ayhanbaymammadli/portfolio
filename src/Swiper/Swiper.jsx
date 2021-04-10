import * as React from "react";
import "./Swiper.css";
import catimg from "../image/cat.jpg";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {" "}
        <div className="team">
          <h2>My Team</h2>
          <div className="container">
            <div className="carouse1">
              <div className="card">
                <div className="box">
                  <img src={catimg} alt="" />
                  <div className="text">filankes</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="team">
          <h2>My Team</h2>
          <div className="container">
            <div className="carouse1">
              <div className="card">
                <div className="box">
                  <img src={catimg} alt="" />
                  <div className="text">filankes</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="team">
          <h2>My Team</h2>
          <div className="container">
            <div className="carouse1">
              <div className="card">
                <div className="box">
                  <img src={catimg} alt="" />
                  <div className="text">filankes</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="team">
          <h2>My Team</h2>
          <div className="container">
            <div className="carouse1">
              <div className="card">
                <div className="box">
                  <img src={catimg} alt="" />
                  <div className="text">filankes</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
