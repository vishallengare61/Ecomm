import React from 'react';
import offer1 from '../../assets/Images/Categories/offer-img1.png';
import offer2 from '../../assets/Images/Categories/offer-img2.png';
import offerLogo from '../../assets/Images/Categories/offer-logo.png';
import bg from '../../assets/Images/Categories/offer-shape.png'; // Make sure to add the wave green background image

const Offer = () => {
  const offers = [
    {
      image: offer1,
      text: "$5 off your first order",
      subtext: "Delivery by 6:15am",
      expired: "expired Aug 5",
    },
    {
      image: offer2,
      text: "$5 off your first order",
      subtext: "Delivery by 6:15am",
      expired: "expired Aug 5",
    },
  ];

  return (
    <div className="offer-section py-5">
      <div className="container-fluid">
        <div className="row g-4">
          {offers.map((offer, index) => (
            <div key={index} className="col-md-6">
              <div
                className="offer-card rounded-4 p-4 d-flex align-items-center justify-content-between flex-wrap"
                style={{
                    backgroundImage: `url(${bg}), linear-gradient(rgba(30, 130, 70, 0.4), rgba(30, 130, 70, 0.4))`,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    color: '#fff',
                  }}
                  
              >
                <div className="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap">
                  <img
                    src={offer.image}
                    alt="Offer"
                    className="offer-img img-fluid"
                    style={{ maxWidth: 180 }}
                  />
                  <div>
                    <img
                      src={offerLogo}
                      alt="Logo"
                      style={{ width: 60, marginBottom: 10, border: '1px solid white', padding: '10px', borderRadius: '50%', background: '#fff' }}
                    />
                    <h4 className="fw-bold mb-2">{offer.text}</h4>
                    <div className="d-flex gap-2 flex-wrap">
                      <span>{offer.subtext}</span>
                      <span className="text-warning">{offer.expired}</span>
                    </div>
                    <button className="btn btn-light mt-3 px-4 py-2 fw-semibold">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .offer-section {
        //   background-color: #f7f7f7;
        }
        .offer-card {
          min-height: 280px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .offer-img {
            max-width: 100%;
            margin-bottom: 1rem;
          }
          .offer-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Offer;
