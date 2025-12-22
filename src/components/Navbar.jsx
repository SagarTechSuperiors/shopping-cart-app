import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "@/redux/slices/authSlice";
import CartPopup from "./CartPopup";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const totalItems = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setShowCart(false);
  }, [router.pathname]);

  return (
    <>
      <nav
        className="navbar navbar-dark shadow"
        style={{ backgroundColor: "#1c2541" }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand fw-bold">
           ShoppyCart
          </Link>

          <div className="d-flex align-items-center gap-3">
            {mounted && user?.username && (
              <span className="text-white">
                Hi, <strong>{user.username}</strong>
              </span>
            )}

            <button
              onClick={() => setShowCart((p) => !p)}
              className="bg-transparent border-0 text-white position-relative"
              disabled={router.pathname === "/cart"}
            >
              <FaShoppingCart size={22} />
              {mounted && totalItems > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </span>
              )}
            </button>

            {mounted && isAuthenticated ? (
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="btn btn-outline-light btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {router.pathname !== "/cart" && (
        <CartPopup
          visible={showCart}
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
}
