import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import ProtectedRoute from "./ProtectedRoute";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <ProtectedRoute>
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column justify-content-between text-center">
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <h6 className="card-title fw-semibold">
            {product.title.slice(0, 50)}
          </h6>
        </div>

        <p className="text-muted mb-2">
          ${product.price}
        </p>
        <button
          className="btn btn-primary mt-2"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </ProtectedRoute>
  );
}

