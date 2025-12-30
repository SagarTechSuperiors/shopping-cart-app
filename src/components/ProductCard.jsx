import React from "react";
import Image from "next/image";

const ProductCard = ({ product, onAddToCart = () => { } }) => {
  return (
    <div className="card h-100 product-card shadow-sm border-0">
      <div className="card-img-container p-3 bg-white d-flex align-items-center justify-content-center" style={{ height: "220px" }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{ objectFit: "contain" }}
            loading="lazy" 
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between p-3">
        <div>
          <h6 className="card-title mb-2 text-truncate-2">
            {product.title}
          </h6>
          <p className="text-primary fw-bold fs-5 mb-3">
            ₹{product.price}
          </p>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="btn btn-primary w-100 fw-semibold py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;