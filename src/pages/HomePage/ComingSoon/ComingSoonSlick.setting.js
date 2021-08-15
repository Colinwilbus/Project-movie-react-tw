function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i class="fa fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i class="fa fa-angle-left"></i>
    </div>
  );
}
export const settingCarousel = {
  arrows: false,
  fade: true,
};

export const settingsSliderNav = {
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  dots: false,
  arrows: true,
  focusOnSelect: true,
  centerMode: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
