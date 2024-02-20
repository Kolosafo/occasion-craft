// Carousel.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/img/slide-1.jpg";
import slide2 from "../../assets/img/slide-2.jpg";
import slide3 from "../../assets/img/slide-3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <img src={slide1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block bg-dark opacity-75">
          <h2 className="animate__animated animate__fadeInDown">
            Welcoume to <br />{" "}
            <span style={{ textDecoration: "underline" }}>OCCASSION CRAFT</span>
          </h2>
          <p className="animate__animated animate__fadeInUp">
            A platform that allows you to digitally invite guests to your
            events. You can now send an invitation from the comfort of your
            home. Our QR code system makes sure guests don&apos;t have to think
            about carrying a physical invitation card.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slide2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block bg-dark opacity-75">
          <h2 className="animate__animated animate__fadeInDown">
            INVITE FRIENDS AND FAMILY
          </h2>
          <p className="animate__animated animate__fadeInUp">
            Gather your favourite people, celebrate and have a huge blast with
            them. Our Digital card design makes your guests feel honored and
            puts you in their good books.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slide3} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block bg-dark opacity-75">
          <h2 className="animate__animated animate__fadeInDown">
            HOST OFFICIAL EVENTS
          </h2>
          <p className="animate__animated animate__fadeInUp">
            Host seminars, meetings, forums and many more. The QR code and guest
            list feature makes sure only invited guests are allow in.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
