import bg from "../../assets/Images/bg-hero.png";
import hero1 from "../../assets/Images/hero1.png";
import hero2 from "../../assets/Images/hero2.png";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero-wrapper position-relative">
      <div className="hero-bg" style={{ backgroundImage: `url(${bg})` }} />

      <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-inner h-100">

          {/* Slide 1 */}
          <div className="carousel-item active h-100" data-bs-interval="5000">
            <div className="container h-100 py-5">
              <div className="row align-items-center h-100">
                <div className="col-lg-6 order-lg-1 order-2">
                  <h1 className="hero-title mb-4">
                    Daily Grocery Order and <br />
                    <span className="text-success">Get Express Delivery</span>
                  </h1>
                  <Link to="/shop" className="btn btn-success btn-lg px-5 rounded-pill d-inline-flex align-items-center gap-2">
                    Explore Shop <FaCartShopping className="fs-5" />
                  </Link>
                </div>
                <div className="col-lg-6 text-center order-lg-2 order-1 mb-4 mb-lg-0">
                  <img src={hero1} alt="Hero 1" className="img-fluid hero-img" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item h-100" data-bs-interval="5000">
            <div className="container h-100 py-5">
              <div className="row align-items-center h-100">
                <div className="col-lg-6">
                  <h1 className="hero-title mb-4">
                    Fresh Products Delivered<br />
                    <span className="text-success">Within 60 Minutes</span>
                  </h1>
                  <Link to="/shop" className="btn btn-success btn-lg px-5 rounded-pill d-inline-flex align-items-center gap-2">
                    Shop Now <FaCartShopping className="fs-5" />
                  </Link>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={hero2} alt="Hero 2" className="img-fluid hero-img" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-btn-wrapper bg-success">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-btn-wrapper bg-success">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="curve-line"></div>
        <div className="animated-arrow"></div>
      </div>
    </div>
  );
};

export default Hero;