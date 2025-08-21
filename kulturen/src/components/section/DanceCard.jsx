import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, imageSrc, altText, title, year, description }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 mt-4 mb-4">
      <div className="card product-card h-100 border-0">
        <div className="product-image-container">
          <Link to={`/product_descriptions?id=${id}`}>
            <img src={imageSrc} alt={altText} className="product-image" />
          </Link>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-title mb-0">
              <b>
                {title} <span className="h6">{year}</span>
              </b>
            </h6>
          </div>
          <div
            className="d-flex flex-wrap align-items-end"
            style={{ gap: 0.5 }}
          >
            <p
              className="card-text mb-0 flex-grow-1"
              style={{ marginBottom: 0 }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
