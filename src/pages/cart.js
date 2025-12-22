import { useSelector, useDispatch } from "react-redux";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/slices/cartSlice";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <ProtectedRoute>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0b132b, #1c2541)",
        }}
        className="py-5"
      >
        <div className="container">

       
          <h2 className="text-center text-white fw-bold mb-5">
             Your Cart
          </h2>

          {items.length === 0 ? (
            <div className="text-center text-white">
              <p className="fs-5 mb-3">Your cart is empty</p>
              <Link
                href="/"
                className="btn btn-outline-light"
              >
                Continue Shopping →
              </Link>
            </div>
          ) : (
            <div className="row justify-content-center">

             
              <div className="col-lg-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="card mb-4 shadow-lg cart-card"
                    style={{
                      background: "rgba(28,37,65,0.9)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div className="card-body d-flex align-items-center gap-4">
                     
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "12px",
                          padding: "10px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                    
                      <div className="flex-grow-1 text-white">
                        <h6 className="fw-semibold mb-1">
                          {item.title}
                        </h6>
                        <p className="text-muted mb-2">
                          ₹ {item.price}
                        </p>

                       
                        <div className="d-flex align-items-center gap-3">
                          <button
                            className="btn btn-sm btn-outline-light"
                            onClick={() =>
                              dispatch(decreaseQuantity(item.id))
                            }
                          >
                            <FaMinus />
                          </button>

                          <span className="fw-bold">
                            {item.quantity}
                          </span>

                          <button
                            className="btn btn-sm btn-outline-light"
                            onClick={() =>
                              dispatch(increaseQuantity(item.id))
                            }
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>

                       <div className="text-end text-white">
                        <p className="fw-bold mb-2">
                          ₹ {(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() =>
                            dispatch(removeFromCart(item.id))
                          }
                          className="btn btn-sm btn-outline-danger"
                        >
                          <FaTrash /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            
              <div className="col-lg-4">
                <div
                  className="card shadow-lg"
                  style={{
                    position: "sticky",
                    top: "90px",
                    background:
                      "rgba(28,37,65,0.95)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="card-body text-white">
                    <h5 className="fw-bold mb-4">
                      Order Summary
                    </h5>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Total Items</span>
                      <span>{totalItems}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <span>Total Price</span>
                      <span className="fw-bold fs-5">
                        ₹ {totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => dispatch(clearCart())}
                      className="btn btn-outline-danger w-100 mb-2"
                    >
                      Clear Cart
                    </button>

                    <button className="btn btn-success w-100">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .cart-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </ProtectedRoute>
  );
}

