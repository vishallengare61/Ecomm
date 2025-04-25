import React from 'react';
import product1 from "../../assets/Images/Categories/product-img1.png";
import product2 from "../../assets/Images/Categories/product-img2.png";
import product3 from "../../assets/Images/Categories/product-img3.png";
import product4 from "../../assets/Images/Categories/product-img5.png";
import product5 from "../../assets/Images/Categories/product-img5.png";
import product6 from "../../assets/Images/Categories/product-img1.png";

const products = [
  {
    id: 1,
    image: product1,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    oldPrice: 28.99,
    newPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    sold: '18/35',
    shop: 'Lucky Supermarket',
  },
  {
    id: 2,
    image: product2,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    oldPrice: 28.99,
    newPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    sold: '18/35',
    shop: 'Lucky Supermarket',
  },
  {
    id: 3,
    image: product3,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    oldPrice: 28.99,
    newPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    sold: '18/35',
    shop: 'Lucky Supermarket',
  },
  {
    id: 4,
    image: product4,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    oldPrice: 28.99,
    newPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    sold: '18/35',
    shop: 'Lucky Supermarket',
  },
  {
    id: 5,
    image: product5,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    oldPrice: 28.99,
    newPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    sold: '18/35',
    shop: 'Lucky Supermarket',
  },
  {
    id: 6,
    image: product6,
    name: 'Taylor Farms Broccoli Florets Vegetables',
    oldPrice: 28.99,
    newPrice: 14.99,
    rating: 4.8,
    reviews: '17k',
    sold: '18/35',
    shop: 'Lucky Supermarket',
  },
];

const Products = () => {
  return (
    <div>
      <style>
        {`
        .products-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 24px;
          padding: 32px;
        //   background-color: #f9f9f9;
        }

        .product-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 16px;
        //   box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e9f7ef;
        }

        .product-card:hover {
        //   transform: translateY(-4px);
        //   box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          transition: transform 0.3s ease;
            border: 1px solid #28a745;
        }

        .add-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #e9f7ef;
          color: #28a745;
          font-weight: bold;
          border: none;
          border-radius: 50%;
          padding: 10px 12px;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: background 0.3s;
          z-index: 1;
        }

        .add-btn:hover {
          background: #d4f3e3;
        }

        .image-wrapper {
          width: 100%;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .product-image {
          max-height: 100%;
          max-width: 100%;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .price {
          margin: 8px 0;
        }

        .old-price {
          text-decoration: line-through;
          color: #999;
          margin-right: 6px;
          font-size: 14px;
        }

        .new-price {
          font-weight: bold;
          color: #000;
          font-size: 16px;
        }

        .product-name {
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #333;
          margin-top: 10px;
          margin-bottom: 6px;
        }

        .shop {
          font-size: 13px;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          margin-bottom: 8px;
        }

        .rating {
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 6px;
          color: #ff9900;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: #eee;
          border-radius: 10px;
          overflow: hidden;
          margin: 8px 0;
        }

        .progress-fill {
          width: 51%;
          height: 100%;
          background-color: #28a745;
        }

        .sold-text {
          font-size: 13px;
          color: #555;
          text-align: center;
        }
        `}
      </style>

      <div className="products-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <button className="add-btn" title="Add to cart">🛒</button>
            <div className="image-wrapper">
              <img src={item.image} alt="product" className="product-image" />
            </div>
            <div className="price">
              <span className="old-price">${item.oldPrice}</span>
              <span className="new-price">${item.newPrice}</span> /Qty
            </div>
            <div className="rating">
              <span>⭐</span>
              <span>{item.rating}</span>
              <span>({item.reviews})</span>
            </div>
            <div className="product-name">{item.name}</div>
            <div className="shop">🏪 {item.shop}</div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="sold-text">Sold: {item.sold}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
