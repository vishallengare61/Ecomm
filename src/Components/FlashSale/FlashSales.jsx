import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import bg from "../../assets/Images/bg-hero.png";
import flashsale1 from "../../assets/Images/Categories/flash-sale-img1.png";
import flashsale2 from "../../assets/Images/Categories/flash-sale-img2.png";

const FlashSales = () => {
  const slides = [
    {
      title: "Flash Sales Today",
      subtitle: "Fresh Vegetables",
      description: "Get 50% off on all fresh vegetables today only!",
      image: flashsale1,
      buttonText: "Shop Now",
      overlayColor: "rgba(255, 242, 229, 0.8)",
      backgroundImage: bg
    },
    {
      title: "Daily Deals",
      subtitle: "Healthy Snacks",
      description: "Special discounts on organic snacks for today",
      image: flashsale2,
      buttonText: "Shop Now",
      overlayColor: "rgba(229, 249, 244, 0.8)",
      backgroundImage: bg
    },
    {
      title: "Weekend Special",
      subtitle: "Organic Fruits",
      description: "Weekend exclusive offers on fresh fruits",
      image: flashsale1,
      buttonText: "Shop Now",
      overlayColor: "rgba(230, 240, 255, 0.8)",
      backgroundImage: bg
    },
    {
      title: "Morning Offer",
      subtitle: "Bakery Items",
      description: "Early bird discounts on bakery products",
      image: flashsale2,
      buttonText: "Shop Now",
      overlayColor: "rgba(255, 226, 230, 0.8)",
      backgroundImage: bg
    }
  ];

  return (
    <div className="flash-sales py-5">
      <div className="container-fluid">
        <h2 className=" mb-5 fw-bold">Flash Sales Today</h2>

        <div id="salesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[...Array(Math.ceil(slides.length / 2))].map((_, groupIndex) => (
              <div
                key={groupIndex}
                className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <div className="row g-4">
                  {slides.slice(groupIndex * 2, groupIndex * 2 + 2).map((slide, index) => (
                    <div key={index} className="col-md-6">
                      <div
                        className="sales-card h-100 p-4 rounded-3 d-flex align-items-center"
                        style={{
                          backgroundImage: `linear-gradient(${slide.overlayColor}, ${slide.overlayColor}), url(${slide.backgroundImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      >
                        <div className="row g-4 align-items-center flex-md-row flex-column">
                          <div className="col-lg-5 col-12 d-flex justify-content-center">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="img-fluid rounded-3 sales-img"
                            />
                          </div>
                          <div className="col-lg-7 col-12">
                            <h3 className="fw-bold mb-2">{slide.title}</h3>
                            <h5 className="text-muted mb-3">{slide.subtitle}</h5>
                            <p className="mb-4">{slide.description}</p>
                            <button className="btn btn-danger px-4 py-2">{slide.buttonText}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev d-none d-md-flex"
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide="prev"
          >
            <BiLeftArrow className="fs-1 text-dark bg-white p-2 rounded-circle shadow" />
          </button>
          <button
            className="carousel-control-next d-none d-md-flex"
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide="next"
          >
            <BiRightArrow className="fs-1 text-dark bg-white p-2 rounded-circle shadow" />
          </button>
        </div>
      </div>

      <style>{`
        .flash-sales {
          // background-color: #F8F9FA;
        }

        .sales-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 250px;
        }

        // .sales-card:hover {
        //   transform: translateY(-5px);
        //   box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        // }

        .btn-danger {
          background-color: #FF2E2E !important;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-danger:hover {
          background-color: #E60000 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 46, 46, 0.3);
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 50px;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .sales-card {
            min-height: auto;
          }

          .carousel-item .col-md-6 {
            margin-bottom: 20px;
          }

          .sales-card .row {
            flex-direction: row !important;
          }

          h3 {
            font-size: 1.5rem;
          }

          h5 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .sales-card {
            padding: 20px !important;
          }

          .sales-card .row {
            flex-direction: column !important;
          }

          h3 {
            font-size: 1.3rem;
          }

          .sales-img {
            max-height: 180px;
            object-fit: contain;
          }
        }
      `}</style>
    </div>
  );
};

export default FlashSales;





