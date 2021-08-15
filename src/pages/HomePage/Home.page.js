import React from "react";
import Carousel from "./Carousel/Carousel";
import ComingSoon from "./ComingSoon/ComingSoon";
import ShowCinema from "./ShowCinema/ShowCinema";
import ShowFilm from "./ShowFilm/ShowFilm";

export default function HomePage(props) {
  console.log(props);
  return (
    <div>
      <Carousel />
      <ShowFilm />
      <ShowCinema />
      <ComingSoon />
    </div>
  );
}
