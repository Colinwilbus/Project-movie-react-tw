import React, { useState, useEffect, useRef } from "react";
import { settingCarousel, settingsSliderNav } from "./ComingSoonSlick.setting";
import Slider from "react-slick";
import "./ComingSoon.scss";

export default function ComingSoon(props) {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  return (
    <section className="comingSoon">
      <div className="comingSoon_content">
        <div className="comingSoon_detail">
          <Slider
            asNavFor={state.nav2}
            ref={(slider) => (slider1.current = slider)}
            {...settingCarousel}
          >
            <div className="comingSoon_Slider ">
              <div className="comingSoon_bg1">
                <img src="./img/slide-1.png" alt="" />
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>DRAMA, THRILLER</p>
                    <h3>Deepwater Horizon</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        30 September, 2017
                      </span>
                    </div>
                    <p>
                      A dramatization of the April 2010 disaster, when the
                      offshore drilling rig Deepwater Horizon exploded and
                      created the worst oil spill in U.S. history.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-1-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comingSoon_Slider ">
              <div className="comingSoon__bg2">
                <img src="./img/slide-2.png" alt="" />
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>ACTION, ADVENTURE, SCI-FI</p>
                    <h3>X-Men: Days of Future Past</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star " />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        07 September, 2018
                      </span>
                    </div>
                    <p>
                      The X-Men send Wolverine to the past in a desperate effort
                      to change history and prevent an event that results in
                      doom for both humans and mutants.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-2-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comingSoon_Slider ">
              <div className="comingSoon__bg3">
                <img src="./img/slide-3.png" alt="" />
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>COMEDY, CRIME</p>
                    <h3>The Hangover Part III</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        30 September, 2017
                      </span>
                    </div>
                    <p>
                      When one of their own is kidnapped by an angry gangster,
                      the Wolf Pack must track down Mr. Chow, who has escaped
                      from prison and is on the run.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-3-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comingSoon_Slider ">
              <div className="comingSoon__bg4">
                <img src="./img/slide-1.png" alt="" />{" "}
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>ACTION, ADVENTURE, SCI-FI</p>
                    <h3>Transformers: Age of Extinction</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        15 April, 2018
                      </span>
                    </div>
                    <p>
                      Autobots must escape sight from a bounty hunter who has
                      taken control of the human serendipity: Unexpectedly,
                      Optimus Prime and his remaining gang turn to a mechanic,
                      his daughter, and her back street racing boyfriend for
                      help.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-1-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comingSoon_Slider ">
              <div className="comingSoon__bg5">
                <img src="./img/slide-2.png" alt="" />
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>ACTION, ADVENTURE, DRAMA</p>
                    <h3>End of an empire</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        15 April, 2018
                      </span>
                    </div>
                    <p>
                      A growing nation of genetically evolved apes led by Caesar
                      is threatened by a band of human survivors of the
                      devastating virus unleashed a decade earlier.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-2-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comingSoon_Slider ">
              <div className="comingSoon__bg6">
                <img src="./img/slide-3.png" alt="" />
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>CRIME, THRILLER, DRAMA</p>
                    <h3>Hannibal Rising</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        15 April, 2018
                      </span>
                    </div>
                    <p>
                      After the death of his parents during World War II, young
                      Hannibal Lecter moves in with his beautiful aunt and
                      begins plotting revenge on the barbarians responsible for
                      his sister's death.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-3-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comingSoon_Slider ">
              <div className="comingSoon__bg7">
                <img src="./img/slide-1.png" alt="" />
              </div>
              <div className="comingSoon_banner container">
                <h2>COMING SOON</h2>
                <div className="row mt-5 ">
                  <div className="col-6 comingSoon_text">
                    <p>ADVENTURE, DRAMA, SCI-FI</p>
                    <h3>Locked out</h3>
                    <div className="comingSoon_star">
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <i className="fa fa-star star_check" />
                      <span>
                        <i className="fa fa-calendar-alt" />
                        15 April, 2018
                      </span>
                    </div>
                    <p>
                      An astronaut becomes stranded on Mars after his team
                      assume him dead, and must rely on his ingenuity to find a
                      way to signal to Earth that he is alive.
                    </p>
                    <a href="#">
                      MORE INFO <i className="fa fa-angle-right" />
                    </a>
                  </div>
                  <div className="col-6 comingSoon_img">
                    <img
                      className="img-fluid"
                      src="./img/slide-1-video.png"
                      alt
                    />
                    <div className="comingSoon_play">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="comingSoon__carousel container">
          <div className="comingSoon__slick">
            <Slider
              asNavFor={state.nav1}
              ref={(slider) => (slider2.current = slider)}
              {...settingsSliderNav}
            >
              <div className="comingSoon__item">
                <div className="item__img">
                  <img src="./img/movie-10.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>Deepwater horizon</h5>
                  <p>07 September, 2017</p>
                </div>
              </div>

              <div className="comingSoon__item ">
                <div className="item__img">
                  <img src="./img/movie-9.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>Too fast</h5>
                  <p>15 April, 2017</p>
                </div>
              </div>

              <div className="comingSoon__item">
                <div className="item__img">
                  <img src="./img/movie-11.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>The Hangover: Part III</h5>
                  <p>30 September, 2017</p>
                </div>
              </div>

              <div className="comingSoon__item">
                <div className="item__img">
                  <img src="./img/movie-12.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>Transformers: Age..</h5>
                  <p>15 April, 2018</p>
                </div>
              </div>

              <div className="comingSoon__item">
                <div className="item__img">
                  <img src="./img/movie-13.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>End of an empire</h5>
                  <p>19 October, 2018</p>
                </div>
              </div>

              <div className="comingSoon__item">
                <div className="item__img">
                  <img src="./img/movie-14.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>The comedian</h5>
                  <p>21 November, 2018</p>
                </div>
              </div>

              <div className="comingSoon__item">
                <div className="item__img">
                  <img src="./img/movie-15.jpg" alt />
                </div>
                <div className="item__text">
                  <h5>Locked out</h5>
                  <p>01 December, 2018</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
