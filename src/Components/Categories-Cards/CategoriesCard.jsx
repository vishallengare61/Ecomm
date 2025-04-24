import React from 'react';
import img1 from "../../assets/Images/Categories/promotional-banner-img1.png";
import img2 from "../../assets/Images/Categories/promotional-banner-img2.png";
import img3 from "../../assets/Images/Categories/promotional-banner-img3.png";
import img4 from "../../assets/Images/Categories/promotional-banner-img4.png";

const CategoriesCard = () => {
  return (
    <div className="categories-cards container-fluid my-5">
      <div className="row g-4 gx-sm-0">
        {/* Card 1 - Meat */}
        <div className="col-12 col-sm-6 col-lg-3 px-sm-2">
          <div className="categoryCard position-relative overflow-hidden rounded-4 w-100"
               style={{ minHeight: '300px' }}>
            <div className="position-absolute w-100 h-100" 
                 style={{ 
                   backgroundImage: `url(${img1})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="position-absolute w-100 h-100" 
                   ></div>
            </div>
            <div className="position-absolute top-5 mt-5 start-0 p-4 ">
              <h3 className="mb-3 fw-bold">Everyday <br /> Fresh Meat</h3>
              <button className="btn btn-success rounded-pill px-4 py-2 mt-3">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Vegetables */}
        <div className="col-12 col-sm-6 col-lg-3 px-sm-2">
          <div className="categoryCard position-relative overflow-hidden rounded-4 w-100"
               style={{ minHeight: '300px' }}>
            <div className="position-absolute w-100 h-100" 
                 style={{ 
                   backgroundImage: `url(${img2})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="position-absolute w-100 h-100" 
                   ></div>
            </div>
            <div className="position-absolute top-5 mt-5 start-0 p-4 ">
              <h3 className="mb-3 fw-bold">Daily Fresh <br /> Vegetables</h3>
              <button className="btn btn-success rounded-pill px-4 py-2 mt-3">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Milk */}
        <div className="col-12 col-sm-6 col-lg-3 px-sm-2">
          <div className="categoryCard position-relative overflow-hidden rounded-4 w-100"
               style={{ minHeight: '300px' }}>
            <div className="position-absolute w-100 h-100" 
                 style={{ 
                   backgroundImage: `url(${img3})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="position-absolute w-100 h-100" 
                   ></div>
            </div>
            <div className="position-absolute top-5 mt-5 start-0 p-4 ">
              <h3 className="mb-3 fw-bold">Everyday <br /> Fresh Milk</h3>
              <button className="btn btn-success rounded-pill px-4 py-2 mt-3">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 - Fruits */}
        <div className="col-12 col-sm-6 col-lg-3 px-sm-2">
          <div className="categoryCard position-relative overflow-hidden rounded-4 w-100"
               style={{ minHeight: '300px' }}>
            <div className="position-absolute w-100 h-100" 
                 style={{ 
                   backgroundImage: `url(${img4})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="position-absolute w-100 h-100" 
                   ></div>
            </div>
            <div className="position-absolute bottom-5 mt-5 start-0 p-4 ">
              <h3 className="mb-3 fw-bold">Everyday <br /> Fresh Fruits</h3>
              <button className="btn btn-success rounded-pill px-4 py-2 mt-3">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .categoryCard {
          transition: transform 0.3s ease;
          width: 100%;
        }
        
        h3 {
          font-size: 1.5rem;
        }

        .btn-success {
          background-color: #2ea44f !important;
          border: none;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .categoryCard {
            min-height: 250px !important;
            padding: 0 10px 0 10px;
          }
          
          h3 {
            font-size: 1.25rem;
          }
          
          .btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .container-fluid {
            padding-left: 12px;
            padding-right: 12px;
          }
          
          .col-12 {
            padding-left: 0;
            padding-right: 0;
          }

          h3 {
            font-size: 1.1rem;
          }
          
          .categoryCard {
            border-radius: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoriesCard;