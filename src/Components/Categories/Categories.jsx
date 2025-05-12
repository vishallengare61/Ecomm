import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import img1 from "../../assets/Images/Categories/feature-img1.png";
import img2 from "../../assets/Images/Categories/feature-img2.png";
import img3 from "../../assets/Images/Categories/feature-img3.png";
import img4 from "../../assets/Images/Categories/feature-img4.png";
import img5 from "../../assets/Images/Categories/feature-img5.png";
import img6 from "../../assets/Images/Categories/feature-img6.png";
import img7 from "../../assets/Images/Categories/feature-img7.png";
import img8 from "../../assets/Images/Categories/feature-img8.png";
import img9 from "../../assets/Images/Categories/feature-img9.png";
import img10 from "../../assets/Images/Categories/feature-img10.png";

const Categories = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      subtitle: "Yummy Candy",
      count: "125+ Products",
      img: img1,
      color: "#e8f9e9",
    },
    {
      title: "Fish & Meats",
      subtitle: "Dairy & Eggs",
      count: "125+ Products",
      img: img2,
      color: "#e8f9e9",
    },
    {
      title: "Snacks",
      subtitle: "Frozen Foods",
      count: "125+ Products",
      img: img3,
      color: "#e8f9e9",
    },
    {
      title: "Vegetables",
      subtitle: "Fish & Meats",
      count: "125+ Products",
      img: img4,
      color: "#e8f9e9",
    },
    {
      title: "Beverages",
      subtitle: "Cold Drinks",
      count: "125+ Products",
      img: img5,
      color: "#e8f9e9",
    },
    {
      title: "Bakery",
      subtitle: "Fresh Breads",
      count: "125+ Products",
      img: img6,
      color: "#e8f9e9",
    },
    {
      title: "PQR",
      subtitle: "Fresh Breads",
      count: "125+ Products",
      img: img7,
      color: "#e8f9e9",
    },
    {
      title: "PQR",
      subtitle: "Fresh Breads",
      count: "125+ Products",
      img: img8,
      color: "#e8f9e9",
    },
    {
      title: "ABC",
      subtitle: "Fresh Breads",
      count: "125+ Products",
      img: img9,
      color: "#e8f9e9",
    },
    {
      title: "XYZ",
      subtitle: "Fresh Breads",
      count: "125+ Products",
      img: img10,
      color: "#e8f9e9",
    },
  ];

  const carouselRef = React.useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="categories-carousel position-relative py-5">
      <div className="container-fluid">
        <div className="position-relative hover-controls">
          <div
            ref={carouselRef}
            className="d-flex gap-4 overflow-x-auto scrollbar-hidden py-3"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-card  p-4 "
                style={{ width: "220px" }}
              >
                
                <div
                  className="img-container rounded-circle mb-3 mx-auto"
                  style={{
                    backgroundColor: category.color,
                    width: "140px",
                    height: "140px",
                    padding: "15px",
                  }}
                >
                  <img
                    src={category.img}
                    alt={category.title}
                    className="img-fluid h-100 w-100 object-fit-contain"
                  />
                </div>
                <h5 className="fw-bold mb-2 fs-6 text-dark">
                  {category.title}
                </h5>
                {/* <p className="text-muted small mb-1">{category.subtitle}</p> */}
                <div className="text-success fw-bold">{category.count}</div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="carousel-control left"
            onClick={() => scroll("left")}
          >
            <BiLeftArrow className="control-icon" />
          </button>
          <button
            className="carousel-control right"
            onClick={() => scroll("right")}
          >
            <BiRightArrow className="control-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
