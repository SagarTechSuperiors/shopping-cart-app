import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "@/redux/slices/cartSlice";
import Link from "next/link";
import ProtectedRoute from "./ProtectedRoute";

export default function CartPopup({ visible, onClose }) {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  if (!visible) return null;

  return (
    <ProtectedRoute>
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "transparent",
          zIndex: 999,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "70px",
          right: "20px",
          width: "340px",
          maxHeight: "75vh",
          overflowY: "auto",
          backgroundColor: "#1c2541",
          borderRadius: "10px",
          padding: "15px",
          zIndex: 1000,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold mb-0 text-white">Your Cart</h6>
          <button onClick={onClose} className="btn btn-sm btn-outline-light">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-white text-center">Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="d-flex gap-2 mb-3 align-items-center">
                <img src={item.image} alt={item.title} width="55" height="55" style={{ objectFit: "contain" }} />

                <div className="flex-grow-1">
                  <small className="text-white">{item.title.slice(0, 30)}...</small>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    <button className="btn btn-sm btn-secondary" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span className="text-white">{item.quantity}</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>

                <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>✕</button>
              </div>
            ))}

            <hr className="text-white" />

            <div className="d-flex justify-content-between text-white fw-bold mb-3">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <Link href="./cart" className="btn btn-primary w-100" onClick={onClose}>
              View Cart
            </Link>
          </>
        )}
      </div>
    </>
    </ProtectedRoute>
  );
}

