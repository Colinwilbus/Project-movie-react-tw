import React from "react";
import Slider from "react-slick";
import { settings } from "./CarouselSlick.setting";
import cr1 from "../../../assets/img/hero-1.jpg";
import cr2 from "../../../assets/img/hero-2.jpg";
import cr3 from "../../../assets/img/hero-3.jpg";
import cr4 from "../../../assets/img/hero-4.jpg";
import "./Carousel.scss";

export default function Carousel() {
  return (
    <div>
      <Slider {...settings}>
        <div className="carousel_item">
          <img src={cr1} alt="..." />
          <div className="carousel_overlay">
            <div className="carousel_content">
              <div className="carousel_caption">
                <p>ACTION, ADVENTURE, FANTASY</p>
                <h5>End of the World: Part II</h5>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamu.
                </p>
                <div className="carousel_trailer">
                  <span className="carousel_span">PG</span>
                  <button id="btn_2">
                    <span>PLAY TRAILER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_item">
          <img src={cr2} alt="..." />
          <div className="carousel_overlay">
            <div className="carousel_content">
              <div className="carousel_caption">
                <p>ACTION, ADVENTURE, FANTASY</p>
                <h5>End of the World: Part II</h5>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamu.
                </p>
                <div className="carousel_trailer">
                  <span className="carousel_span">PG</span>
                  <button id="btn_2">
                    <span>PLAY TRAILER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_item">
          <img src={cr3} alt="..." />
          <div className="carousel_overlay">
            <div className="carousel_content">
              <div className="carousel_caption">
                <p>ACTION, ADVENTURE, FANTASY</p>
                <h5>End of the World: Part II</h5>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamu.
                </p>
                <div className="carousel_trailer">
                  <span className="carousel_span">PG</span>
                  <button id="btn_2">
                    <span>PLAY TRAILER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_item">
          <img src={cr4} alt="..." />
          <div className="carousel_overlay">
            <div className="carousel_content">
              <div className="carousel_caption">
                <p>ACTION, ADVENTURE, FANTASY</p>
                <h5>End of the World: Part II</h5>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamu.
                </p>
                <div className="carousel_trailer">
                  <span className="carousel_span">PG</span>
                  <button id="btn_2">
                    <span>PLAY TRAILER</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
