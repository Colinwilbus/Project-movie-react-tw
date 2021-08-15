import React from "react";
import Slider from "react-slick";
import "./ShowFilm.scss";
import { settings } from "./ShowFilmSlick.setting";

export default function ShowFilm() {
  return (
    <section className="newIn">
      <div className="newIn_content ">
        <div className="newIn_title">
          <h2>NEW IN</h2>
        </div>
        <div className="newIn_carousel">
          <Slider {...settings}>
            <div className="newIn_item">
              <div className="newIn_img">
                <div className="newIn_overlay">
                  <i className="fa fa-play"></i>
                  <a href="#">READ MORE</a>
                  <p>Released: 7 Mar, 2017</p>
                </div>
                <img src="./img/movie-1.jpg" alt="..." />
              </div>
              <div className="newIn_text">
                <p>The last post</p>
                <div className="newIn_star">
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                </div>
              </div>
            </div>
            <div className="newIn_item">
              <div className="newIn_img">
                <div className="newIn_overlay">
                  <i className="fa fa-play" />
                  <a href="#">READ MORE</a>
                  <p>Released: 7 Mar, 2017</p>
                </div>
                <img src="./img/movie-2.jpg" alt="..." />
              </div>
              <div className="newIn_text">
                <p>The last post</p>
                <div className="newIn_star">
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
            <div className="newIn_item">
              <div className="newIn_img">
                <div className="newIn_overlay">
                  <i className="fa fa-play" />
                  <a href="#">READ MORE</a>
                  <p>Released: 7 Mar, 2017</p>
                </div>
                <img src="./img/movie-3.jpg" alt="..." />
              </div>
              <div className="newIn_text">
                <p>The last post</p>
                <div className="newIn_star">
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                </div>
              </div>
            </div>
            <div className="newIn_item">
              <div className="newIn_img">
                <div className="newIn_overlay">
                  <i className="fa fa-play" />
                  <a href="#">READ MORE</a>
                  <p>Released: 7 Mar, 2017</p>
                </div>
                <img src="./img/movie-4.jpg" alt="..." />
              </div>
              <div className="newIn_text">
                <p>The last post</p>
                <div className="newIn_star">
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
            <div className="newIn_item">
              <div className="newIn_img">
                <div className="newIn_overlay">
                  <i className="fa fa-play" />
                  <a href="#">READ MORE</a>
                  <p>Released: 7 Mar, 2017</p>
                </div>
                <img src="./img/movie-3.jpg" alt="..." />
              </div>
              <div className="newIn_text">
                <p>The last post</p>
                <div className="newIn_star">
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                  <i className="fa fa-star star_check" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
