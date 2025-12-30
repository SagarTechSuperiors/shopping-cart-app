import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "@/redux/slices/cartSlice";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <ProtectedRoute>
      <div className="py-5 cart-bg">
        <div className="container">
          <h2 className="text-center text-white fw-bold mb-5">Your Shopping Bag</h2>
          {items.length === 0 ? (
            <div className="text-center text-white py-5">
              <p className="fs-5 mb-4">Your cart feels a bit light.</p>
              <Link href="/" className="btn btn-primary px-4">Go Shopping</Link>
            </div>
          ) : (
            <div className="row g-4">
              <div className="col-lg-8">
                {items.map((item) => (
                  <div key={item.id} className="card mb-3 cart-card p-3">
                    <div className="d-flex align-items-center gap-4">
                      <div className="bg-white rounded p-2" style={{width: '100px'}}>
                        <Image src={item.image} alt={item.title} width={80} height={80} objectFit="contain" />
                      </div>
                      <div className="flex-grow-1 text-white">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-primary fw-bold mb-2">₹{item.price}</p>
                        <div className="d-flex align-items-center gap-3">
                          <button className="btn btn-sm btn-outline-light" onClick={() => dispatch(decreaseQuantity(item.id))}><FaMinus /></button>
                          <span>{item.quantity}</span>
                          <button className="btn btn-sm btn-outline-light" onClick={() => dispatch(increaseQuantity(item.id))}><FaPlus /></button>
                        </div>
                      </div>
                      <div className="text-end text-white">
                        <p className="fw-bold mb-3">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <button className="btn btn-sm text-danger p-0" onClick={() => dispatch(removeFromCart(item.id))}><FaTrash /> Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4">
                <div className="card p-4 summary-card text-white">
                  <h4 className="mb-4">Order Summary</h4>
                  <div className="d-flex justify-content-between mb-2"><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></div>
                  <div className="d-flex justify-content-between mb-4"><span>Shipping</span><span className="text-success">FREE</span></div>
                  <hr />
                  <div className="d-flex justify-content-between mb-4 fs-5 fw-bold"><span>Total</span><span>₹{totalPrice.toFixed(2)}</span></div>
                  <button className="btn btn-primary w-100 py-3 fw-bold">PROCEED TO CHECKOUT</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}